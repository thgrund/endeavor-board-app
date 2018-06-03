
import mocks from './mocks';
import {receiveAreaOfConcerns} from '../actions/AreaOfConcernActions';
import {receiveAlpha} from '../actions/AlphaActions';
import {receiveAlphaState} from '../actions/AlphaStateActions';
import {receiveTask} from '../actions/TaskActions';

export const loadAreaOfConcerns = (store) => {
  mocks.getAreaOfConcerns(areaOfConcerns => {
    areaOfConcerns.map(areaOfConcern =>
        store.dispatch(receiveAreaOfConcerns(areaOfConcern))
    )
  });
};

export const loadAlphas = (store) => {
  mocks.getAlphas(alphas => {
    alphas.map(alpha =>
        store.dispatch(receiveAlpha(alpha))
    )
  });
};

export const loadAlphaStates = (store) => {
  mocks.getAlphaStates(alphaStates => {
    alphaStates.map(alphaState =>
        store.dispatch(receiveAlphaState(alphaState))
    )
  });
};

export const loadTasks = (store) => {
  mocks.getTasks(tasks => {
    tasks.map(task =>
        store.dispatch(receiveTask(task))
    )
  });
};