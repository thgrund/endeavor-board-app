import React from 'react';
import BoardSteps from './BoardSteps'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('>>>BoardSteps --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
        <BoardSteps currentStep={2}/>)
  });

  it('+++ BoardSteps --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

