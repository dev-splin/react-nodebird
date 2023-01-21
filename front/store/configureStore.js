import {createWrapper} from "next-redux-wrapper";
import {applyMiddleware, compose, createStore} from "redux";
import reducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";

/**
 * Store 설정.
 * @returns {Store<S & {}, Action> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
const configureStore = () => {
  const middlewares = [];

  // middlewares를 사용하여 redux의 기능을 확장 (히스토리 확인 시 필요)
  const enhancer = process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용일 때는 개발자 도구와 연동(History)

  // store 생성
  const store = createStore(reducer, enhancer);

  return store;
};

// Server Side에서 Redux Store 접근을 위한 wrapper 생성
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;