import { combineReducers } from 'redux';
import tasks from './tasks'
import alphaStates from './alphaStates'
import alphas from './alphas'
import areaOfConcerns from './areaOfConcerns'

export default combineReducers({
  alphaStates,
  tasks,
  alphas,
  areaOfConcerns
})

