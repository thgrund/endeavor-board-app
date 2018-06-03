import React from 'react';
import ReviewBoardColumnContainer from './ReviewBoardColumnContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {alphaState, areaOfConcern, alpha} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>ReviewBoardColumnContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(<ReviewBoardColumnContainer
        store={mockStore()}
        alphaState={alphaState}
        columnNumber={1}
        alphaColor={areaOfConcern.color}
        alphaTitle={alpha.title}
        isAlphaStateReadOnly={true}
    />)
  });

  it('+++ ReviewBoardColumnContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

