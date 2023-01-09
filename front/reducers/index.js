import {HYDRATE} from "next-redux-wrapper";

// 초기값 설정
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }
}

// 액션 설정
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}
// ===

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return {
       ...state,
       ...action.payload,
      };
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        }
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        }
      };
    // 디폴트가 있어야 초기 값을 불러올 수 있음
    default:
      return {...state};
  }
}

export default rootReducer;