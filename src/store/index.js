import { applyMiddleware, compose, createStore } from 'redux';

import ducks from './ducks';
import sagas from './sagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMonitor({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer()
  )
  : applyMiddleware(...middlewares);

const store = createStore(ducks, composer);

sagaMiddleware.run(sagas);

export default store;
