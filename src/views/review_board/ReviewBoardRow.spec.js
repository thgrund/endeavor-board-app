import React from 'react';
import ReviewBoardRow from './ReviewBoardRow'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern, alphaState} from '../../utils/TestData';
import {Map} from 'immutable';
import {checkAllCriteria, uncheckAllCriteria} from '../../actions/AlphaStateActions';

configure({ adapter: new Adapter() });

describe('>>>ReviewBoardRow --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<ReviewBoardRow
        onUncheckAllCriteria={uncheckAllCriteria}
        onCheckAllCriteria={checkAllCriteria}
        alphaTitle={alpha.title}
        alphaColor={areaOfConcern.color}
        alphaStateIds={alpha.alphaStateIds}
        alphaStates={new Map({'1': alphaState})} />
    )
  });

  it('+++ ReviewBoardRow --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

