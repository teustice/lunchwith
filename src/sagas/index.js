import { fork, all } from 'redux-saga/effects';

import watchFetchTitle from './fetch-title';
import watchFetchMarkers from './fetch-markers';
import watchFetchUser from './fetch-user';
import watchFetchUserLocation from './fetch-userLocation';
import watchFetchClusters from './fetch-clusters';


export default function* rootSaga() {
  yield all([
    fork(watchFetchTitle),
    fork(watchFetchMarkers),
    fork(watchFetchUser),
    fork(watchFetchUserLocation),
    fork(watchFetchClusters),
  ]);
}
