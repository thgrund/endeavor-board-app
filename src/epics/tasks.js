import {ADD_TASK,
  SET_GITLAB_SYNC_FAILURE_TO_FALSE,
  SET_GITLAB_SYNC_FAILURE_TO_TRUE,
  SET_GITLAB_SYNC_STATUS_TO_TRUE,
  SET_GITLAB_SYNC_STATUS_TO_FALSE,
  ADD_GITLAB_ISSUE_ID,
  DELETE_TASK,
  RENAME_TASK,
  TOGGLE_TASK_STATE
} from '../constants/TaskActionTypes';
import { Observable } from 'rxjs';
import 'rxjs';

const url = 'http://localhost/api/v4/projects/5/issues';
const privateToken = 'xEkWyfeAe-6D3DS4Q12z';

export const addGitLabIssue = (actions$, store, {ajax}) => (
  actions$
  .ofType(ADD_TASK)
  .switchMap(action =>
    ajax({
      method: 'POST',
      url: url,
      body: {private_token: privateToken, title: action.title}
    })
    .flatMap(response =>
      Observable.concat(
        Observable.of({
          type: ADD_GITLAB_ISSUE_ID,
          id: action.taskId,
          gitLabId: response.response.iid
        }),
        Observable.of({
          type: SET_GITLAB_SYNC_STATUS_TO_TRUE,
          id: action.taskId
        }),
        Observable.of({
          type: SET_GITLAB_SYNC_FAILURE_TO_FALSE,
          id: action.taskId
        })
      )
    )
    .catch(error => Observable.of({
      type: SET_GITLAB_SYNC_FAILURE_TO_TRUE,
      id: action.taskId
    }))

  )
);

export const renameGitLabIssue = (actions$, store, {ajax}) => (
  actions$.ofType(RENAME_TASK)
  .mergeMap(action =>
  Observable.concat(
      Observable.of({
        type: SET_GITLAB_SYNC_STATUS_TO_FALSE,
        id: action.id
      }),
      ajax({
        method: 'PUT',
        url: url + '/' + store.getState().tasks.get(action.id).gitLabId,
        body: {private_token: privateToken, title: action.title}
      })
      .mapTo({type: SET_GITLAB_SYNC_STATUS_TO_TRUE, id: action.id})
      .catch(error => Observable.of({
          type: SET_GITLAB_SYNC_FAILURE_TO_TRUE,
          id :action.id
      })),
    )
  )
);

export const toggleGitLabIssue = (actions$, store, {ajax}) => (
  actions$.ofType(TOGGLE_TASK_STATE)
  .mergeMap(action =>
    Observable.concat (
      Observable.of({
        type: SET_GITLAB_SYNC_STATUS_TO_FALSE,
        id: action.id
      }),

      ajax({
        method: 'PUT',
        url: url + '/' + store.getState().tasks.get(action.id).gitLabId,
        body: {private_token: privateToken,
          state_event: store.getState().tasks.get(action.id).isClosed ? "close" : "reopen"}
      })
      .mapTo({type: SET_GITLAB_SYNC_STATUS_TO_TRUE, id: action.id})
      .catch(error =>
          Observable.of({type: SET_GITLAB_SYNC_FAILURE_TO_TRUE, id :action.id})
      )
    )
  )
);

export const deleteGitLabIssue = (actions$, store, {ajax}) => (
  actions$
  .ofType(DELETE_TASK)
  .switchMap(action =>
    ajax({
      method: 'DELETE',
      url: url + "/" + store.getState().tasks.get(action.taskId).gitLabId,
      body: {private_token: privateToken}
    })
    .catch(error => Observable.of({
      type: SET_GITLAB_SYNC_FAILURE_TO_TRUE,
      id :action.taskId
      })
    )
  )
);
