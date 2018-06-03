import {RECEIVE_AREA_OF_CONCERNS} from '../constants/AreaOfConcernTypes';
import mocks from '../api/mocks';

export const receiveAreaOfConcerns = areaOfConcern => ({
  type: RECEIVE_AREA_OF_CONCERNS,
  areaOfConcern
});