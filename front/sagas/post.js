import { fork, all, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import shortid from 'shortid';
import actions from '../constants/sagas';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortid.generate();
    yield put({
      type: actions.ADD_POST_SUCCESS,
      data: { id, content: action.data },
    });
    yield put({
      type: actions.ADD_POST_TO_ME,
      data: { id },
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
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: actions.ADD_COMMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(actions.ADD_COMMENT_REQUEST, addComment);
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: actions.REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: actions.REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: actions.REMOVE_POST_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchRemovePost() {
  yield takeLatest(actions.REMOVE_POST_REQUEST, removePost);
}

// saga는 generator 방식을 사용함
export default function* postSaga() {
  // 배열 안에 동작을 한 번에 실행
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
  ]);
}
