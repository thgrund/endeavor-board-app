import React from 'react';
import TaskBoard from './TaskBoard'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import {alpha, areaOfConcern} from '../../utils/TestData';
import {Map} from 'immutable';

configure({ adapter: new Adapter() });

describe('>>>TaskBoard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <TaskBoard
            alphas={new Map({'1': alpha})}
            areaOfConcerns={new Map({'1': areaOfConcern})}/>)
  });

  it('+++ TaskBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

