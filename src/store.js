import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createActionBuffer from 'redux-action-buffer'
import { REHYDRATE } from 'redux-persist/constants'

import getRootReducer from './reducers/index';
import sagas from './sagas/index';
// import eventsMap from './beacon-events';
import getConnected from './selectors/connected';
import Immutable from 'immutable';

const state = Immutable.fromJS({});

const loggerMiddleware = createLogger({
  // options...
});

const middlewares = [];

if (__DEV__ === true) {
  middlewares.push(loggerMiddleware);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// const offlineStorage = offlineReactNative(AsyncStorage, getConnected);

// middlewares.push(beaconMiddleware);

const enhancer = compose(
  applyMiddleware(...middlewares),
);

export default function getStore(navReducer) {
  const store = createStore(
      getRootReducer(navReducer),
      {},                           // initial state
      enhancer,
  );
  sagaMiddleware.run(sagas);
  return store;
}
