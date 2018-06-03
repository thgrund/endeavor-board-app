import {ADD_TASK, DELETE_TASK, TOGGLE_TASK_STATE, RECEIVE_TASK, RENAME_TASK} from '../constants/TaskActionTypes';
import reducer from './tasks';
import { Map } from 'immutable';

import Task from '../records/Task';

describe('tasks rootReducer', () => {

  const task_1 = Task({
    id: '1',
    title: 'Run the test',
    isClosed: false,
    isSyncedWithGitLab: false
  });
  const task_2 = Task({
    id: '2',
    title: 'Run the next test',
    isClosed: false,
    isSyncedWithGitLab: false
  });

  it('should handle ADD_TASK', () => {
    expect(
        reducer(Map({}), {
          taskId: '1',
          alphaStateId: '1',
          title: "Run the test",
          isClosed: false,
          isSyncedWithGitLab: false,
          type: ADD_TASK,
        })
    ).toEqual(Map({
      '1': task_1
      })
    );

    expect(
      reducer(
        Map({
          '1': task_1
        }),
        {
          taskId: '2',
          alphaStateId: '1',
          title: "Run the next test",
          isClosed: false,
          isSyncedWithGitLab: false,
          type: ADD_TASK,
        }
      )
    ).toEqual(
      Map({
        '1': task_1,
        '2': task_2
      }),
    )
  });

  it('should handle RECEIVE_TASK', () => {
    expect(
        reducer(Map({}), {
          task: {
            id: '1',
            alphaStateId: '1',
            title: "Run the test",
            isSyncedWithGitLab: false,
          },
          type: RECEIVE_TASK

        })
    ).toEqual(Map({
          '1': task_1
        })
    );

    expect(
        reducer(
            Map({
              '1': task_1
            }),
            {
              task: {
                id: '2',
                alphaStateId: 1,
                title: "Run the next test",
                isSyncedWithGitLab: false,
              },
              type: RECEIVE_TASK
            }
        )
    ).toEqual(
        Map({
          '1': task_1,
          '2': task_2
        }),
    )
  });

  it('should handle DELETE_TASK', () => {

    expect(
      reducer(
        Map({
            '1': task_1,
            '2': task_2
        }),
        {
          id: '1',
          type: DELETE_TASK
        }
      )
    ).toEqual(
      Map({
        '2': task_2
      }),
    )
  });

  const toggleTaskState = task_1.set('isClosed', true);
  it('should handle TOGGLE_TASK_STATE', () => {

    expect(
      reducer(
        Map({
          '1': task_1,
          '2': task_2
        }),
        {
          id: '1',
          type: TOGGLE_TASK_STATE
        }
      )
    ).toEqual(
      Map({
        '1': toggleTaskState,
        '2': task_2
      }),
    );

    expect(
      reducer(
        Map({
          '1': Task({
            id: '1',
            title: 'Run the test',
            isClosed: true,
            isSyncedWithGitLab: false
          }),
          '2': task_2
        }),
        {
          id: '1',
          type: TOGGLE_TASK_STATE
        }
      )
    ).toEqual(
        Map({
          '1': Task({
            id: '1',
            title: 'Run the test',
            isClosed: false,
            isSyncedWithGitLab: false
          }),
          '2': task_2
        }),
    )
  });

  const renamedTask = task_1.set('title', 'This is the new title');
  it('should handle RENAME_TASK', () => {
    expect(
        reducer(
          Map({
            '1': task_1,
            '2': task_2
          }),
          {
            id: '1',
            title: 'This is the new title',
            type: RENAME_TASK
          })
    ).toEqual(
        Map({
          '1': renamedTask,
          '2': task_2
        }),
    );
  })
});