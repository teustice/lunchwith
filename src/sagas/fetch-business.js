import { call, put, takeLatest } from 'redux-saga/effects';

import { BUSINESS_FETCH } from '../lib/constants/actions';

import setBusiness from '../actions/set-business';
import seededBusiness from '../lib/seeds/mapSeed.js';
import { genericError } from '../actions/errors';

const executeFetchBusiness = () => {
  return seededBusiness;
};

function* fetchBusiness(action) {
  try {
    const markers = yield call(executeFetchBusiness);
    yield put(setBusiness(markers));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch business'));
  }
}

export default function* watchFetchBusiness() {
  yield takeLatest(MARKERS_FETCH, fetchBusiness);
}
