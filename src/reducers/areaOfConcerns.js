import {RECEIVE_AREA_OF_CONCERNS} from '../constants/AreaOfConcernTypes';
import { Map } from 'immutable';
import AreaOfConcern from '../records/AreaOfConcern';
import AreaOfConcernCounter from '../utils/AreaOfConcernCounter';

export default function areaOfConcerns (state = Map({}), action) {
  if (action.type === RECEIVE_AREA_OF_CONCERNS) {
    if (action.areaOfConcern.id > AreaOfConcernCounter.getCounter()) {
      AreaOfConcernCounter.setCounter(action.areaOfConcern.id);
    }
    return state.set(action.areaOfConcern.id, new AreaOfConcern({
          ...action.areaOfConcern
        })
    );
  } else {
    return state;
  }
}