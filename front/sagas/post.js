import { fork, all, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../constants/sagas';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: actions.ADD_POST_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: actions.ADD_POST_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(actions.ADD_POST_REQUEST, addPost);
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: actions.ADD_COMMENT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: actions.ADD_COMMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(actions.ADD_POST_REQUEST, addComment);
}

// saga는 generator 방식을 사용함
export default function* postSaga() {
  // 배열 안에 동작을 한 번에 실행
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}
