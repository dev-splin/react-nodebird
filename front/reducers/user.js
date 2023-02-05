import actions from "../constants/sagas";

export const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  me: null,
  signUpDate: {},
  loginData: {},
}

// 액션 설정
export const loginRequestAction = (data) => {
  return {
    type: actions.LOG_IN,
    data,
  }
}

export const logoutRequestAction = () => {
  return {
    type: actions.LOG_OUT,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: {...action.data, nickname: 'splin'},
      };
    case actions.LOG_IN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
      };
    case actions.LOG_OUT:
      console.log('로그아웃');
      return {
        ...state,
        isLoggingOut: true,
      };
    case actions.LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    case actions.LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
}

export default reducer;