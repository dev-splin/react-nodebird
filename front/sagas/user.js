import { fork, all, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../constants/sagas';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: actions.LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: actions.LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: actions.LOG_OUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: actions.LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signup');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: actions.SIGN_UP_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: actions.SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(actions.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(actions.LOG_OUT_REQUEST, logOut);
}

function* watcSignUp() {
  yield takeLatest(actions.SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    // fork(비동기)나 call(동기)로 genaerator 함수를 실행
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watcSignUp),
  ]);
}
