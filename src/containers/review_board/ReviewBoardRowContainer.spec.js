import React from 'react';
import ReviewBoardRowContainer from './ReviewBoardRowContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {alpha, areaOfConcern} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>ReviewBoardRowContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);
  const alphaStateIds = ["1", "2"];

  beforeEach(()=>{
    wrapper = shallow(
        <ReviewBoardRowContainer
           store={mockStore()}
           alphaColor={areaOfConcern.color}
           alphaStateIds={alphaStateIds}
           alphaTitle={alpha.title} />)
  });

  it('+++ ReviewBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

