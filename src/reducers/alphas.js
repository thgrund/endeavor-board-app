import {RECEIVE_ALPHA} from '../constants/AlphaActionTypes';
import { Map } from 'immutable';
import Alpha from '../records/Alpha';
import AlphaCounter from '../utils/AlphaCounter';

export default function alphas (state = Map({}), action) {
  if (action.type === RECEIVE_ALPHA) {
    if (action.alpha.id > AlphaCounter.getCounter()) {
      AlphaCounter.setCounter(action.alpha.id);
    }
    return state.set(action.alpha.id, new Alpha({
          ...action.alpha
        })
    );
  } else {
    return state;
  }
}