import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers/index';
import rootEpic from './epics/index';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/alpha_state_card.css';
import EndeavorBoardContainer from './containers/endeavor_board/EndeavorBoardContainer';
import { Provider } from 'react-redux';
import * as loadMocks from './api/loadMocks';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

loadMocks.loadAreaOfConcerns(store);
loadMocks.loadAlphas(store);
loadMocks.loadAlphaStates(store);
loadMocks.loadTasks(store);

render(
    <Provider store={store}>
      <EndeavorBoardContainer />
    </Provider>,
    document.getElementById('root')
);
