import { call, put, takeLatest } from 'redux-saga/effects';

import { TITLE_FETCH } from '../lib/constants/actions';
import Api from '../lib/api';
import setTitle from '../actions/set-title';
import { genericError } from '../actions/errors';

const executeFetchTitle = () => {
  const root = 'https://jsonplaceholder.typicode.com';
  const params = '/posts/1';
  return Api.get(root + params).then((val) => {
    console.log(val);
    return val.title.slice(0, 8);
  });
};

function* fetchTitle(action) {
  try {
    const title = yield call(executeFetchTitle);
    yield put(setTitle(title));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch Title'));
  }
}

export default function* watchFetchTitle() {
  yield takeLatest(TITLE_FETCH, fetchTitle);
}
