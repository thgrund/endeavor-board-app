import * as taskEpics from './tasks';
import {DELETE_TASK, ADD_TASK,
  RENAME_TASK,
  TOGGLE_TASK_STATE,
  ADD_GITLAB_ISSUE_ID,
  SET_GITLAB_SYNC_STATUS_TO_TRUE,
  SET_GITLAB_SYNC_STATUS_TO_FALSE,
  SET_GITLAB_SYNC_FAILURE_TO_TRUE,
  SET_GITLAB_SYNC_FAILURE_TO_FALSE
} from '../constants/TaskActionTypes';
import { Observable } from 'rxjs';
import { assert } from 'chai';
import { ActionsObservable } from 'redux-observable';
import rootEpic from '../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import {task, alphaState} from '../utils/TestData';
import {Map, Record} from 'immutable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const mockStore = configureMockStore([epicMiddleware]);

const store = mockStore(Record({
  tasks: new Map({'1': task}),
  alphaStates: new Map({'1': alphaState})
}));

describe('addGitLabIssueEpic from task epic', () => {

  const action$ = ActionsObservable.of({type: ADD_TASK, title: 'Test', taskId: '1'});

  it('dispatches the correct action when ajax call is successful', (done) => {
    const ajax = () => Observable.of({ response : { iid: 1 }  });

    const expectedOutputActions =   [
      { type: ADD_GITLAB_ISSUE_ID, id: '1', gitLabId: 1 },
      { type: SET_GITLAB_SYNC_STATUS_TO_TRUE, id: '1' },
      { type: SET_GITLAB_SYNC_FAILURE_TO_FALSE, id: '1'}
    ];

    taskEpics.addGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });

  it('dispatches the correct action when there is an error', (done) => {
    const ajax = () => Observable.throw('save failed');
    const expectedOutputActions = [{ type: SET_GITLAB_SYNC_FAILURE_TO_TRUE, id: '1' }];

    taskEpics.addGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });
});

describe('renameGitLabIssueEpic from task epic', () => {

  const action$ = ActionsObservable.of({type: RENAME_TASK, title: 'Test', id: '1'});

  it('dispatches the correct action when ajax call is successful', (done) => {
    const ajax = () => Observable.of({});

    const expectedOutputActions =   [
      { type : SET_GITLAB_SYNC_STATUS_TO_FALSE, id: '1'},
      { type : SET_GITLAB_SYNC_STATUS_TO_TRUE, id: '1' }
    ];

    taskEpics.renameGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });

  it('dispatches the correct action when there is an error', (done) => {
    const ajax = () => Observable.throw('save failed');
    const expectedOutputActions =   [
      { type : SET_GITLAB_SYNC_STATUS_TO_FALSE, id: '1'},
      { type : SET_GITLAB_SYNC_FAILURE_TO_TRUE, id: '1' }
    ];

    taskEpics.renameGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });
});

describe('toggleGitLabIssueEpic from task epic', () => {

  const action$ = ActionsObservable.of({type: TOGGLE_TASK_STATE, id: '1'});

  it('dispatches the correct action when ajax call is successful', (done) => {
    const ajax = () => Observable.of({});

    const expectedOutputActions =   [
      { type : SET_GITLAB_SYNC_STATUS_TO_FALSE, id: '1'},
      { type : SET_GITLAB_SYNC_STATUS_TO_TRUE, id: '1' }
    ];

    taskEpics.toggleGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });

  it('dispatches the correct action when there is an error', (done) => {
    const ajax = () => Observable.throw('save failed');
    const expectedOutputActions =   [
      { type : SET_GITLAB_SYNC_STATUS_TO_FALSE, id: '1'},
      { type : SET_GITLAB_SYNC_FAILURE_TO_TRUE, id: '1' }
    ];

    taskEpics.toggleGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });
});

describe('deleteGitLabIssueEpic from task epic', () => {
  const action$ = ActionsObservable.of({type: DELETE_TASK, taskId: '1'});

  it('dispatches the correct action when ajax call is successful', (done) => {
    const ajax = () => Observable.of({});

    taskEpics.deleteGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, [{}]);
      done();
    })
  });

  it('dispatches the correct action when there is an error', (done) => {
    const ajax = () => Observable.throw('save failed');
    const expectedOutputActions = [{type: SET_GITLAB_SYNC_FAILURE_TO_TRUE, id: '1'}];

    taskEpics.deleteGitLabIssue(action$, store, {ajax})
    .toArray()
    .subscribe(actualOutputActions => {
      assert.deepEqual(actualOutputActions, expectedOutputActions);
      done();
    })
  });
});

