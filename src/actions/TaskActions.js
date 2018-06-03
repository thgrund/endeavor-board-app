import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATE,
  RECEIVE_TASK,
  RENAME_TASK
} from '../constants/TaskActionTypes';

import TaskCounter from '../utils/TaskCounter';
import mocks from '../api/mocks';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const addTask = (title, alphaStateId) => ({
    taskId: TaskCounter.increment(),
    alphaStateId,
    title,
    isClosed: false,
    isSyncedWithGitLab: false,
    type: ADD_TASK
});

export const deleteTask = (alphaStateId, taskId) =>  ({
  alphaStateId,
  taskId,
  type: DELETE_TASK,
});

export const toggleTaskState = id => ({
    id,
    type: TOGGLE_TASK_STATE,
});

export const renameTask = (id, title) => ({
  type: RENAME_TASK,
  id,
  title
});
