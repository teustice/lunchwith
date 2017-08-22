import { call, put, takeLatest } from 'redux-saga/effects';

import { MARKERS_FETCH } from '../lib/constants/actions';
import Api from '../lib/api';
import setMarkers from '../actions/set-markers';
import seededMarkers from '../lib/seeds/mapSeed.js';
import { genericError } from '../actions/errors';

const executeFetchMarkers = () => {
  return seededMarkers;
};

function* fetchMarkers(action) {
  try {
    const markers = yield call(executeFetchMarkers);
    yield put(setMarkers(markers));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch markers'));
  }
}

export default function* watchFetchMarkers() {
  yield takeLatest(MARKERS_FETCH, fetchMarkers);
}
