import { call, put, takeLatest } from 'redux-saga/effects';

import { USER_FETCH } from '../lib/constants/actions';
import setUser from '../actions/set-user';
import seededUsers from '../lib/seeds/userSeed.js';
import { genericError } from '../actions/errors';

const executeFetchUser = () => {

  const users = seededUsers;
  return users[0];
};

function* fetchUser(action) {
  try {
    const user = yield call(executeFetchUser);
    yield put(setUser(user));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch user'));
  }
}

export default function* watchFetchUser() {
  yield takeLatest(USER_FETCH, fetchUser);
}
