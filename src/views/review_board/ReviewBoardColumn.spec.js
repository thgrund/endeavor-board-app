import React from 'react';
import ReviewBoardColumn from './ReviewBoardColumn'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, alphaState, areaOfConcern} from '../../utils/TestData';
import {toggleCriteria} from '../../actions/AlphaStateActions';

configure({ adapter: new Adapter() });

describe('>>>ReviewBoardColumn --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<ReviewBoardColumn
        alphaState={alphaState}
        alphaColor={areaOfConcern.color}
        alphaTitle={alpha.title}
        columnNumber={1}
        onToggleCriteria={toggleCriteria}/>
    )
  });

  it('+++ ReviewBoardColumn --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

