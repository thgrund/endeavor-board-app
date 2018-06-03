import {
  RECEIVE_ALPHA_STATES,
  DELETE_TASK,
  TOGGLE_OBJECTIVE,
  TOGGLE_CRITERIA,
  CHECK_ALL_CRITERIA,
  UNCHECK_ALL_CRITERIA
} from '../constants/AlphaStateActionTypes';
import reducer from './alphaStates';
import { Map } from 'immutable';
import AlphaState from '../records/AlphaState';

describe('tasks rootReducer', () => {

  const alphaState_1 = AlphaState({
    id: "1",
    title: "Title 1",
    order: "1",
    checklistMap: {
      "Key 1" : true,
      "Key 2" : false,
      "Key 3" : false,
      "Key 4" : true
    },
    isObjective: true,
    taskIds: ["1"]
  });
  const alphaState_2 = AlphaState({
    id: "2",
    title: "Title 2",
    order: "2",
    checklistMap: {
      "Key 1" : false,
      "Key 2" : true,
      "Key 3" : false,
    },
    isObjective: true,
    taskIds: ["2", "3"]
  });

  it('should handle RECEIVE_ALPHA_STATE', () => {
    expect(
        reducer(Map({}), {
          alphaState: {
            id: alphaState_1.id,
            title: alphaState_1.title,
            order: alphaState_1.order,
            checklistMap: alphaState_1.checklistMap,
            isObjective: alphaState_1.isObjective,
            taskIds: alphaState_1.taskIds
          },
          type: RECEIVE_ALPHA_STATES

        })
    ).toEqual(Map({
          '1': alphaState_1
        })
    );
  });

  const deleteTaskAlphaState = alphaState_1.set('taskIds', []);
  it('should handle DELETE_TASK', () => {

    expect(
        reducer(
            Map({
              '1': alphaState_1,
              '2': alphaState_2
            }),
            {
              alphaStateId: '1',
              taskId: '1',
              type: DELETE_TASK
            }
        )
    ).toEqual(
        Map({
          '1' : deleteTaskAlphaState,
          '2' : alphaState_2
        }),
    )
  });

  const toggleObjectiveAlphaState = alphaState_1.set('isObjective', false);
  it('should handle TOGGLE_OBJECTIVE', () => {

    expect(
        reducer(
            Map({
              '1': alphaState_1,
              '2': alphaState_2
            }),
            {
              id: '1',
              type: TOGGLE_OBJECTIVE
            }
        )
    ).toEqual(
        Map({
          '1' : toggleObjectiveAlphaState,
          '2' : alphaState_2
        }),
    )
  });

  const toggleCriteriaAlphaState = alphaState_1.set('checklistMap', {
    "Key 1" : true,
    "Key 2" : false,
    "Key 3" : true,
    "Key 4" : true
  });
  it('should handle TOGGLE_CRITERIA', () => {
    expect(
        reducer(
            Map({
              '1': alphaState_1,
              '2': alphaState_2
            }),
            {
              id: '1',
              key: 'Key 3',
              type: TOGGLE_CRITERIA
            }
        )
    ).toEqual(
        Map({
          '1' : toggleCriteriaAlphaState,
          '2' : alphaState_2
        }),
    )
  });

  const CheckAllCriteriaAlphaState = alphaState_1.set('checklistMap', {
    "Key 1" : true,
    "Key 2" : true,
    "Key 3" : true,
    "Key 4" : true
  });
  it('should handle CHECK_ALL_CRITERIA', () => {
    expect(
        reducer(
            Map({
              '1': alphaState_1,
              '2': alphaState_2
            }),
            {
              id: '1',
              type: CHECK_ALL_CRITERIA
            }
        )
    ).toEqual(
        Map({
          '1' : CheckAllCriteriaAlphaState,
          '2' : alphaState_2
        }),
    )
  });

  const UncheckAllCriteriaAlphaState = alphaState_1.set('checklistMap', {
    "Key 1" : false,
    "Key 2" : false,
    "Key 3" : false,
    "Key 4" : false
  });
  it('should handle UNCHECK_ALL_CRITERIA', () => {
    expect(
        reducer(
            Map({
              '1': alphaState_1,
              '2': alphaState_2
            }),
            {
              id: '1',
              type: UNCHECK_ALL_CRITERIA
            }
        )
    ).toEqual(
        Map({
          '1' : UncheckAllCriteriaAlphaState,
          '2' : alphaState_2
        }),
    )
  });
});