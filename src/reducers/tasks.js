import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATE,
  RECEIVE_TASK,
  RENAME_TASK,
  ADD_GITLAB_ISSUE_ID,
  SET_GITLAB_SYNC_STATUS_TO_FALSE,
  SET_GITLAB_SYNC_STATUS_TO_TRUE,
  SET_GITLAB_SYNC_FAILURE_TO_FALSE,
  SET_GITLAB_SYNC_FAILURE_TO_TRUE
} from '../constants/TaskActionTypes';
import { Map } from 'immutable';
import Task from '../records/Task';
import TaskCounter from '../utils/TaskCounter';

export default function tasks (state = Map({}), action) {
  switch (action.type) {
    case ADD_TASK:

      if (!action.title) {
        return state;
      }

      return state.set(action.taskId, new Task ({
        id: action.taskId,
        title: action.title,
        isClosed: action.isClosed,
        isSyncedWithGitLab: action.isSyncedWithGitLab,
      }));

    case RECEIVE_TASK :
      if (action.task.id > TaskCounter.getCounter())
        TaskCounter.setCounter(action.task.id);

      return state.set(action.task.id, new Task({
            ...action.task
          })
      );

    case DELETE_TASK:
      return state.delete(action.id);

    case RENAME_TASK:
      return state.update(
          action.id,
          task => task.set('title', action.title),
      );

    case TOGGLE_TASK_STATE:
      return state.update(
          action.id,
          task => task.set('isClosed', !task.isClosed),
      );

    case ADD_GITLAB_ISSUE_ID:
      return state.update(
          action.id,
          task => task.set('gitLabId', action.gitLabId)
      );

    case SET_GITLAB_SYNC_FAILURE_TO_TRUE:
      return state.update(
          action.id,
          task => task.set('hasGitlabSyncFailure', true)
      );

    case SET_GITLAB_SYNC_FAILURE_TO_FALSE:
      return state.update(
          action.id,
          task => task.set('hasGitlabSyncFailure', false)
      );


    case SET_GITLAB_SYNC_STATUS_TO_TRUE:
      return state.update(
          action.id,
          task => task.set('isSyncedWithGitLab', true)
      );

    case SET_GITLAB_SYNC_STATUS_TO_FALSE:
      return state.update(
          action.id,
          task => task.set('isSyncedWithGitLab', false)
      );

    default:
      return state;
  }
}