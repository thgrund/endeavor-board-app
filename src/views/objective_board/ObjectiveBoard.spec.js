import React from 'react';
import ObjectiveBoard from './ObjectiveBoard'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern, alphaState} from '../../utils/TestData';
import {Map} from 'immutable';

configure({ adapter: new Adapter() });

describe('>>>ObjectiveBoard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <ObjectiveBoard
            alphas={new Map({'1': alpha})}
            areaOfConcerns={new Map({'1': areaOfConcern})}
            alphaStates={new Map({'1': alphaState})}/>)
  });

  it('+++ ObjectiveBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

