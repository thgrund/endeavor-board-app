import React from 'react';
import ObjectiveBoardColumnContainer from './ObjectiveBoardColumnContainer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { createStore } from 'redux'
import configureMockStore from 'redux-mock-store';
import rootEpic from '../../epics/index';
import { createEpicMiddleware } from 'redux-observable';
import {alphaState, alpha, areaOfConcern} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>ObjectiveBoardColumnContainer --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const mockStore = configureMockStore([epicMiddleware]);

  beforeEach(()=>{
    wrapper = shallow(<ObjectiveBoardColumnContainer
        store={mockStore()}
        alphaTitle={alpha.title}
        alphaColor={areaOfConcern.color}
        alphaState={alphaState}
        columnNumber={1}
        key={alphaState.title}
    />)
  });

  it('+++ ObjectiveBoardColumnContainer --- render the SMART component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

