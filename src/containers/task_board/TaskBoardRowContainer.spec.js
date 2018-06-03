import React from 'react';
import TaskBoardRowContainer from './TaskBoardRowContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {areaOfConcern, alphaState, alpha} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>TaskBoardRowContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(<TaskBoardRowContainer
      store={mockStore()}
      alphaTitle={alpha.title}
      alphaColor={areaOfConcern.color}
      alphaStateId={alphaState.id}
    />)
  });

  it('+++ TaskBoardRowContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

