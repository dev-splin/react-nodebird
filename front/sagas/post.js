import { fork, all, takeLatest, delay, put, throttle } from 'redux-saga/effects';
import axios from 'axios';
import shortid from 'shortid';
import actions from '../constants/sagas';
import { generateDummyPost } from '../reducers/post';

function loadPostAPI(data) {
  return axios.post('/api/post', data);
}

function* loadPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: actions.LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (e) {
    yield put({
      type: actions.LOAD_POSTS_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield throttle(5000, actions.LOAD_POSTS_REQUEST, loadPost);
}

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

// saga??? generator ????????? ?????????
export default function* postSaga() {
  // ?????? ?????? ????????? ??? ?????? ??????
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
  ]);
}
