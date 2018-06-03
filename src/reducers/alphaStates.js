import {
  TOGGLE_OBJECTIVE,
  RECEIVE_ALPHA_STATES,
  TOGGLE_CRITERIA,
  CHECK_ALL_CRITERIA,
  UNCHECK_ALL_CRITERIA} from '../constants/AlphaStateActionTypes';
import {ADD_TASK, DELETE_TASK} from '../constants/TaskActionTypes';
import { Map } from 'immutable';
import AlphaState from '../records/AlphaState';
import AlphaStateCounter from '../utils/AlphaStateCounter';

function criterias(state = {}, action) {
  let stateBoolean;
  const newState = {};

  if (action.type === CHECK_ALL_CRITERIA) {
    stateBoolean = true;
  } else if (action.type === UNCHECK_ALL_CRITERIA) {
    stateBoolean = false;
  }

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      newState[key] = stateBoolean;
    }
  }

  return newState;
}

export default function alphaStates (state = Map({}), action) {

  let arrayvar = [];
  switch (action.type) {
    case RECEIVE_ALPHA_STATES :
      if (action.alphaState.id > AlphaStateCounter.getCounter())
        AlphaStateCounter.setCounter(action.alphaState.id);

      return state.set(action.alphaState.id, new AlphaState({
        ...action.alphaState
        })
      );

    case ADD_TASK:
      arrayvar = state.get(action.alphaStateId).taskIds.slice();
      arrayvar.push(action.taskId);

      return state.update(action.alphaStateId,
          alphaState => alphaState.set('taskIds', arrayvar),
      );

    case DELETE_TASK:

      arrayvar = state.get(action.alphaStateId).taskIds.slice();

      let index = arrayvar.indexOf(action.taskId);

      if (index > -1) {
        arrayvar.splice(index, 1);
      }

      return state.update(action.alphaStateId,
          alphaState => alphaState.set('taskIds', arrayvar),
      );

    case TOGGLE_OBJECTIVE:
      return state.update(
          action.id,
          alphaState => alphaState.set('isObjective', !alphaState.isObjective),
      );

    case TOGGLE_CRITERIA:
      const originalChecklistMap = state.get(action.id).checklistMap;
      const slicedChecklistMap = {};

      for (const key in originalChecklistMap) {
        if (originalChecklistMap.hasOwnProperty(key)) {
          if (key === action.key)
            slicedChecklistMap[key] = !originalChecklistMap[key];
          else
            slicedChecklistMap[key] = originalChecklistMap[key];
        }
      }

      return state.update(
          action.id,
          alphaState => alphaState.set('checklistMap', slicedChecklistMap),
      );

    case CHECK_ALL_CRITERIA:
    case UNCHECK_ALL_CRITERIA:
      return state.update(
          action.id,
          alphaState => alphaState.set('checklistMap', criterias(alphaState.checklistMap, action)),
      );

    default:
      return state;
  }
};