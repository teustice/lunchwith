import { call, put, takeLatest } from 'redux-saga/effects';

import { USER_LOCATION_FETCH } from '../lib/constants/actions';
import Api from '../lib/api';
import setUserLocation from '../actions/set-userLocation';
import { genericError } from '../actions/errors';

const executeFetchUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    },
    (error) => { return { error: error.message },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }},
  );
};

function* fetchUserLocation(action) {
  try {
    const coordinates = yield call(executeFetchUserLocation);
    yield put(setUserLocation(coordinates));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch coordinates'));
  }
}

export default function* watchFetchUserLocation() {
  yield takeLatest(USER_LOCATION_FETCH, fetchUserLocation);
}
