import React from 'react';
import EndeavorBoardContainer from './EndeavorBoardContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {areaOfConcern, alpha} from '../../utils/TestData';
import {Map} from 'immutable';

configure({ adapter: new Adapter() });

describe('>>>EndeavorBoardContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(<EndeavorBoardContainer
        store={mockStore()}
        alphas={new Map({'1': alpha})}
        areaOfConcerns={new Map({'1': areaOfConcern})}
    />)
  });

  it('+++ EndeavorBoardContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

