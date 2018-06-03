import React from 'react';
import ObjectiveBoardColumn from './ObjectiveBoardColumn'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {alpha, areaOfConcern, alphaState, wrapInTestContext} from '../../utils/TestData';

configure({ adapter: new Adapter() });

describe('>>>ObjectiveBoardColumn --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  const ObjectiveBoardColumnContext
      = wrapInTestContext(ObjectiveBoardColumn);

  beforeEach(()=>{
    wrapper = shallow(
        <ObjectiveBoardColumnContext
            alphaState={alphaState}
            alphaColor={areaOfConcern.color}
            alphaTitle={alpha.title}
            columnNumber={1} />)
  });

  it('+++ ObjectiveBoardColumn --- render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});

