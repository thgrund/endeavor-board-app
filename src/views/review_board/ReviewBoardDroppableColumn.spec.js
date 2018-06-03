import React from 'react';
import ReviewBoardDroppableColumn from './ReviewBoardDroppableColumn'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, wrapInTestContext} from '../../utils/TestData';
import {checkIfAllCriteriaAreDone} from '../../utils/Map';
import {checkAllCriteria, uncheckAllCriteria} from '../../actions/AlphaStateActions';

configure({ adapter: new Adapter() });

describe('>>>ReviewBoardDroppableColumn --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const ReviewBoardDroppableColumnContext
      = wrapInTestContext(ReviewBoardDroppableColumn);

  beforeEach(()=>{
    wrapper = shallow(<ReviewBoardDroppableColumnContext
        alphaTitle={alpha.title}
        checkIfAllCriteriaAreDone={checkIfAllCriteriaAreDone}
        onCheckAllCriteria={checkAllCriteria}
        onUncheckAllCriteria={uncheckAllCriteria}/>
    )
  });

  it('+++ ReviewBoardDroppableColumn --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

