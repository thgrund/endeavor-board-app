import {ADD_TASK, DELETE_TASK, TOGGLE_TASK_STATE, RECEIVE_TASK} from '../constants/TaskActionTypes';
import {addTask, deleteTask, toggleTaskState, receiveTask} from './TaskActions';
import TaskCounter from '../utils/TaskCounter';

describe('task actions', () => {

  const taskMock = {
    id: "1",
    title: "Test Titel",
    isClosed: false,
    isSyncedWithGitLab: false
  };

  it('addTaks should create ADD_TASK action', () => {
    expect(addTask('Task title', 1, false)).toEqual({
      taskId: TaskCounter.getCounter(),
      alphaStateId: 1,
      title: 'Task title',
      isClosed: false,
      isSyncedWithGitLab: false,
      type: ADD_TASK
    })
  });

  it('deleteTask should create DELETE_TASK action', () => {
    expect(deleteTask('1', '1', false)).toEqual({
      alphaStateId: '1',
      taskId: '1',
      type: DELETE_TASK
    })
  });

  it('toggleTaskState should create TOGGLE_TASK_STATE action', () => {
    expect(toggleTaskState(1)).toEqual({
      id: 1,
      type: TOGGLE_TASK_STATE
    })
  });

  it('receiveTask should create RECEIVE_TASK action', () => {
    expect(receiveTask(taskMock)).toEqual({
      task: taskMock,
      type: RECEIVE_TASK
    })
  })
});