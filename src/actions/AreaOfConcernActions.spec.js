import {RECEIVE_AREA_OF_CONCERNS} from '../constants/AreaOfConcernTypes';
import {receiveAreaOfConcerns} from './AreaOfConcernActions';

describe('areaOfConcern actions', () => {
  const areaOfConcernMock = {
    id: "1",
    title: "Test Titel",
    color: "#FFFFFF",
    alphaIds: ["1", "2"]
  };

  it('receiveAreaOfConcerns should create RECEIVE_AREA_OF_CONCERNS action', () => {
    expect(receiveAreaOfConcerns(areaOfConcernMock)).toEqual({
      areaOfConcern: areaOfConcernMock,
      type: RECEIVE_AREA_OF_CONCERNS
    })
  })
});