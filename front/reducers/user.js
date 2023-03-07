import produce from 'immer';
import actions from '../constants/sagas';

export const initialState = {
  followLoading: false, // 팔로우 시도 중
  followDone: false,
  followError: false,
  unfollowLoading: false, // 언팔로우 시도 중
  unfollowDone: false,
  unfollowError: false,
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: false,
  logOutLoading: false, // 로그아웃 시도 중
  logOutDone: false,
  logOutError: false,
  signUpLoading: false, // 회원가입 시도
  signUpDone: false,
  signUpError: false,
  changeNicknameLoading: false, // 닉네임 변경 시도
  changeNicknameDone: false,
  changeNicknameError: false,
  me: null,
  signUpDate: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: 'splin',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: 'sp' }, { nickname: 'sp1' }, { nickname: 'sp2' }],
  Followers: [{ nickname: 'sp' }, { nickname: 'sp1' }, { nickname: 'sp2' }],
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

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actions.FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;
    case actions.FOLLOW_SUCCESS:
      draft.me.Followings.push({ id: action.data });
      draft.followLoading = false;
      draft.followDone = true;
      break;
    case actions.FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followDone = action.error;
      break;
    case actions.UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;
    case actions.UNFOLLOW_SUCCESS:
      draft.me.Followings = draft.me.Followings.filter((following) => following.id !== action.data);
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      break;
    case actions.UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowDone = action.error;
      break;
    case actions.LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case actions.LOG_IN_SUCCESS:
      draft.me = dummyUser(action.data);
      draft.logInLoading = false;
      draft.logInDone = true;
      break;
    case actions.LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInDone = action.error;
      break;
    case actions.LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;
    case actions.LOG_OUT_SUCCESS:
      draft.me = null;
      draft.logOutLoading = false;
      draft.logOutDone = true;
      break;
    case actions.LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case actions.SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;
    case actions.SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case actions.SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case actions.ADD_POST_TO_ME:
      draft.me.Posts.unshift({ id: action.data.id });
      break;
    case actions.REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter((post) => post.id !== action.data);
      break;
    default:
      break;
  }
});

export default reducer;
