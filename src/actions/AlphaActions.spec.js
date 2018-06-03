import {RECEIVE_ALPHA} from '../constants/AlphaActionTypes';
import {receiveAlpha} from './AlphaActions';

describe('alpha actions', () => {
  const alphaMock = {
    id: "1",
    title: "Test Titel",
    alphaStateIds: ["1", "2"]
  };

  it('receiveAlpha should create RECEIVE_ALPHA action', () => {
    expect(receiveAlpha(alphaMock)).toEqual({
      alpha: alphaMock,
      type: RECEIVE_ALPHA
    })
  })
});