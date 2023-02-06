import actions from '../constants/sagas';

export const initialState = {
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: false,
  logOutLoading: false, // 로그아웃 시도 중
  logOutDone: false,
  logOutError: false,
  signUpLoading: false, //
  signUpDone: false,
  signUpError: false,
  me: null,
  signUpDate: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: 'splin',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

// 액션 설정
export const loginRequestAction = (data) => ({
  type: actions.LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: actions.LOG_OUT_REQUEST,
});

export const signUpRequestAction = (data) => ({
  type: actions.SIGN_UP_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };
    case actions.LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case actions.LOG_OUT_REQUEST:
      console.log('로그아웃');
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case actions.LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case actions.LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case actions.SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    case actions.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
