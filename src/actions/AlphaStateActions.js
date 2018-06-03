import {
  TOGGLE_OBJECTIVE,
  DELETE_TASK,
  RECEIVE_ALPHA_STATES,
  TOGGLE_CRITERIA,
  CHECK_ALL_CRITERIA,
  UNCHECK_ALL_CRITERIA
} from '../constants/AlphaStateActionTypes';

import mocks from '../api/mocks';

export const receiveAlphaState = alphaState => ({
  type: RECEIVE_ALPHA_STATES,
  alphaState
});

export const deleteTask = (alphaStateId, taskId) => ({
  alphaStateId: alphaStateId,
  taskId: taskId,
  type: DELETE_TASK,
});

export const toggleObjective = id => ({
  type: TOGGLE_OBJECTIVE,
  id
});

export const toggleCriteria = (id, key) => ({
  type: TOGGLE_CRITERIA,
  id,
  key
});

export const checkAllCriteria = id => ({
  type: CHECK_ALL_CRITERIA,
  id
});

export const uncheckAllCriteria = id => ({
  type: UNCHECK_ALL_CRITERIA,
  id
});