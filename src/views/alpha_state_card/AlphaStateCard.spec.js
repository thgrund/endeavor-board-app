import React from 'react';
import AlphaStateCard from './AlphaStateCard'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alphaState, alpha, areaOfConcern} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>AlphaStateCard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <AlphaStateCard
            alphaState={alphaState}
            alphaColor={areaOfConcern.color}
            alphaTitle={alpha.title}
            isCriteriaCheckable={false}
        />)
  });

  it('+++ AlphaStateCard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

