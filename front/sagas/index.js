import { all, fork } from 'redux-saga/effects';
import postSaga from "./post";
import userSaga from "./user";

// saga는 generator 방식을 사용함
export default function*() {
  // 배열 안에 동작을 한 번에 실행
  yield all([
    fork(userSaga),
    fork(postSaga),
  ])
}