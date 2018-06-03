import React from 'react';
import TaskBoardColumnEntry from './TaskBoardColumnEntry'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import {deleteTask, toggleTaskState, renameTask} from '../../actions/TaskActions';
import {task, alphaState} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>TaskColumnEntry --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <TaskBoardColumnEntry
          alphaStateId={alphaState.id}
          onDeleteTask={deleteTask}
          onToggleTaskState={toggleTaskState}
          onRenameTask={renameTask}
          task={task} />)
  });

  it('+++ ReviewBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

