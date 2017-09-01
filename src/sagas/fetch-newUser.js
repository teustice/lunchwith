import { call, put, takeLatest } from 'redux-saga/effects';

import { NEWUSER_FETCH } from '../lib/constants/actions';
import setNewUser from '../actions/set-newUser';
import { genericError } from '../actions/errors';

const executeFetchNewUser = () => {
  
};

function* fetchNewUser(action) {
  try {
    const coordinates = yield call(executeFetchNewUser);
    yield put(setNewUser(coordinates));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch coordinates'));
  }
}
