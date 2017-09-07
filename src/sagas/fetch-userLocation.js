import { call, put, takeLatest } from 'redux-saga/effects';

import { USER_LOCATION_FETCH } from '../lib/constants/actions';
import Api from '../lib/api';
import setUserLocation from '../actions/set-userLocation';
import { genericError } from '../actions/errors';

const executeFetchUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude);
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    },
    (error) => { return { error: error.message },
    { enableHighAccuracy: true, maximumAge: 1000 }},
  );
};

function* fetchUserLocation(action) {
  try {
    const coordinates = yield call(executeFetchUserLocation);
    console.log(coordinates);
    yield put(setUserLocation(coordinates));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch coordinates'));
  }
}

export default function* watchFetchUserLocation() {
  yield takeLatest(USER_LOCATION_FETCH, fetchUserLocation);
}
