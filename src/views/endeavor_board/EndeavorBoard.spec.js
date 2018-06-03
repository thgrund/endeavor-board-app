import React from 'react';
import EndeavorBoard from './EndeavorBoard'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern} from '../../utils/TestData';
import {Map} from 'immutable';

configure({ adapter: new Adapter() });

describe('>>>ObjectiveBoard --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <EndeavorBoard
            alphas={new Map({'1': alpha})}
            areaOfConcerns={new Map({'1': areaOfConcern})}
        />)
  });

  it('+++ ObjectiveBoard --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

