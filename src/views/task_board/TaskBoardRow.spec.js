import React from 'react';
import TaskBoardRow from './TaskBoardRow'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, alphaState, areaOfConcern} from '../../utils/TestData';
import {Map} from 'immutable';

configure({ adapter: new Adapter() });

describe('>>>TaskBoardRow --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <TaskBoardRow
            alphaColor={areaOfConcern.color}
            alphaStateId={alphaState.id}
            alphaStates={new Map({'1': alphaState})}
            alphaTitle={alpha.title}/>)
  });

  it('+++ TaskBoardRow --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

