import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        };
      // 디폴트가 있어야 초기 값을 불러올 수 있음
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
