import React from 'react';
import AlphaStateDraggableCard from './AlphaStateDraggableCard'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern, alphaState, wrapInTestContext} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>AlphaStateDraggableCard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const AlphaStateDraggableCardContext
      = wrapInTestContext(AlphaStateDraggableCard);

  beforeEach(()=>{
    wrapper = shallow(<AlphaStateDraggableCardContext
        alphaTitle={alpha.title}
        alphaColor={areaOfConcern.color}
        alphaState={alphaState}
        isCriteriaCheckable={false} />
    )
  });

  it('+++ AlphaStateDraggableCard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});

