import React from 'react';
import TaskColumnContainer from './TaskColumnContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {alpha, alphaState, areaOfConcern} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>TaskColumnContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(
        <TaskColumnContainer
            store={mockStore()}
            alphaColor={areaOfConcern.color}
            alphaState={alphaState}
            alphaTitle={alpha.title}
            columnNumber={1}/>)
  });

  it('+++ TaskColumnContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

