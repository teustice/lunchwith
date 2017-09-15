import { call, put, takeLatest } from 'redux-saga/effects';

import { BUSINESS_FETCH } from '../lib/constants/actions';
import RNGooglePlaces from 'react-native-google-places';
import setBusiness from '../actions/set-business';
import seededBusiness from '../lib/seeds/mapSeed.js';
import { genericError } from '../actions/errors';

const executeFetchBusiness = () => {
  let results;
  console.log(RNGooglePlaces);
  RNGooglePlaces.getAutocompletePredictions('pizza',{
	  type: 'establishments',
    latitude: 45.571471,
    longitude: -122.673368,
	  radius: 20
  })
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));
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
  yield takeLatest(BUSINESS_FETCH, fetchBusiness);
}
