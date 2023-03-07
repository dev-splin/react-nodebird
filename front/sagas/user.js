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

function followAPI() {
  return axios.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield delay(1000);
    yield put({
      type: actions.FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: actions.FOLLOW_FAILURE,
      error: e.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield delay(1000);
    yield put({
      type: actions.UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: actions.UNFOLLOW_FAILURE,
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

function* watchSignUp() {
  yield takeLatest(actions.SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(actions.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(actions.UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  yield all([
    // fork(비동기)나 call(동기)로 genaerator 함수를 실행
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}
