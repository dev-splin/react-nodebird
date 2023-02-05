import { fork, all, takeLatest, delay, put} from 'redux-saga/effects'
import axios from "axios";

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
    });
  } catch (e) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: e.response.data
    });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

// saga는 generator 방식을 사용함
export default function* postSaga() {
  // 배열 안에 동작을 한 번에 실행
  yield all([
    fork(watchAddPost),
  ])
}