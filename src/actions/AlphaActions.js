import {RECEIVE_ALPHA} from '../constants/AlphaActionTypes';
import mocks from '../api/mocks';

export const receiveAlpha = alpha => ({
  type: RECEIVE_ALPHA,
  alpha
});