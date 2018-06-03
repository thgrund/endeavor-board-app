import {
  RECEIVE_ALPHA_STATES,
  DELETE_TASK,
  TOGGLE_OBJECTIVE,
  TOGGLE_CRITERIA,
  CHECK_ALL_CRITERIA,
  UNCHECK_ALL_CRITERIA
}
from '../constants/AlphaStateActionTypes';
import {
  receiveAlphaState,
  deleteTask,
  toggleObjective,
  toggleCriteria,
  checkAllCriteria,
  uncheckAllCriteria
}
from './AlphaStateActions';

describe('alpha state actions', () => {
  const alphaStateMock = {
    id: "1",
    title: "Test Titel",
    order: "1",
    checklistMap: {
      "Key1" : true,
      "Key2" : false
    },
    isObjective: true,
    taskIds: ["1", "2"]
  };

  it('deleteTask should create DELETE_TASK action', () => {
    expect(deleteTask(1, 3)).toEqual({
      alphaStateId: 1,
      taskId: 3,
      type: DELETE_TASK,
    })
  });

  it('toggleObjective should create TOGGLE_OBJECTIVE action', () => {
    expect(toggleObjective(1)).toEqual({
      id: 1,
      type: TOGGLE_OBJECTIVE,
    })
  });

  it('toggleCriteria should create TOGGLE_CRITERIA action', () => {
    expect(toggleCriteria(1, "Test Key")).toEqual({
      id: 1,
      key: "Test Key",
      type: TOGGLE_CRITERIA,
    })
  });

  it('checkAllCriteria should create CHECK_ALL_CRITERIA action', () => {
    expect(checkAllCriteria(1)).toEqual({
      id: 1,
      type: CHECK_ALL_CRITERIA,
    })
  });

  it('uncheckAllCriteria should create UNCHECK_ALL_CRITERIA action', () => {
    expect(uncheckAllCriteria(1)).toEqual({
      id: 1,
      type: UNCHECK_ALL_CRITERIA,
    })
  });

  it('receiveAlphaState should create RECEIVE_ALPHA action', () => {
    expect(receiveAlphaState(alphaStateMock)).toEqual({
      alphaState: alphaStateMock,
      type: RECEIVE_ALPHA_STATES
    })
  })
});