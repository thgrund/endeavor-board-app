import React from 'react';
import TaskColumnEntryContainer from './TaskColumnEntryContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {task, alphaState} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>TaskColumnEntryContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(<TaskColumnEntryContainer
        store={mockStore()}
        task={task}
        alphaStateId={alphaState.id}
    />)
  });

  it('+++ TaskColumnEntryContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

