import React from 'react';
import TaskBoardColumn from './TaskBoardColumn'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import {alphaState} from '../../utils/TestData';
import {addTask} from '../../actions/TaskActions';

configure({ adapter: new Adapter() });

describe('>>>TaskBoard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <TaskBoardColumn
            alphaColor="#ffffff"
            alphaState={alphaState}
            alphaTitle="Test Titel"
            columnNumber={1}
            onAddTask={addTask} />
    )
  });

  it('+++ TaskBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

