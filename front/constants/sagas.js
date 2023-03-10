const actions = {
  LOG_IN_REQUEST: 'LOG_IN_REQUEST', // 로그인 시도
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE: 'LOG_IN_FAILURE',
  LOG_OUT_REQUEST: 'LOG_OUT_REQUEST', // 로그아웃 시도
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_FAILURE: 'LOG_OUT_FAILURE',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST', // 회원가입 시도
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
  CHANGE_NICKNAME_REQUEST: 'CHANGE_NICKNAME_REQUEST', // 닉네임 변경 시도
  CHANGE_NICKNAME_SUCCESS: 'CHANGE_NICKNAME_SUCCESS',
  CHANGE_NICKNAME_FAILURE: 'CHANGE_NICKNAME_FAILURE',
  ADD_POST_TO_ME: 'ADD_POST_TO_ME',
  REMOVE_POST_OF_ME: 'REMOVE_POST_OF_ME',

  FOLLOW_REQUEST: 'FOLLOW_REQUEST',
  FOLLOW_SUCCESS: 'FOLLOW_SUCCESS',
  FOLLOW_FAILURE: 'FOLLOW_FAILURE',
  UNFOLLOW_REQUEST: 'UNFOLLOW_REQUEST',
  UNFOLLOW_SUCCESS: 'UNFOLLOW_SUCCESS',
  UNFOLLOW_FAILURE: 'UNFOLLOW_FAILURE',

  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_FAILURE: 'LOAD_POSTS_FAILURE',
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_FAILURE: 'ADD_POST_FAILURE',
  REMOVE_POST_REQUEST: 'REMOVE_POST_REQUEST',
  REMOVE_POST_SUCCESS: 'REMOVE_POST_SUCCESS',
  REMOVE_POST_FAILURE: 'REMOVE_POST_FAILURE',
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_FAILURE: 'ADD_COMMENT_FAILURE',
};

export default actions;
