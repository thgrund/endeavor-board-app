/**
 * Mocking client-server processing
 */

import _alphas from './alphas.json';
import _areaOfConcerns from './areaOfConcerns.json';
import _alpahStates from './alphaStates.json';
import _tasks from './tasks.json';

const TIMEOUT = 0;

export default {
  getAreaOfConcerns: (cb, timeout) => setTimeout(() => cb(_areaOfConcerns), timeout || TIMEOUT),
  getAlphas: (cb, timeout) => setTimeout(() => cb(_alphas), timeout || TIMEOUT),
  getAlphaStates: (cb, timeout) => setTimeout(() => cb(_alpahStates), timeout || TIMEOUT),
  getTasks: (cb, timeout) => setTimeout(() => cb(_tasks), timeout || TIMEOUT)
}

