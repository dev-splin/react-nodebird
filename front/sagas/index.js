import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from "axios";

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
    });
  } catch (e) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: e.response.data
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    });
  } catch (e) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: e.response.data
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch (e) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: e.response.data
    });
  }
}

function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

// saga는 generator 방식을 사용함
export default function*() {
  // 배열 안에 동작을 한 번에 실행
  yield all([
    // fork(비동기)나 call(동기)로 genaerator 함수를 실행
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ])
}