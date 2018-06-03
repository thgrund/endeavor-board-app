import React from 'react';
import ObjectiveBoardRow from './ObjectiveBoardRow'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern, alphaState} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>ObjectiveBoardRow--- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <ObjectiveBoardRow
            alphaTitle={alpha.title}
            alphaColor={areaOfConcern.color}
            alphaState={alphaState}/>)
  });

  it('+++ ObjectiveBoardRow --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

