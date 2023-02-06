import actions from '../constants/sagas';

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'Splin',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://i.ibb.co/WPKYdQK/Lickitung1.jpg',
        },
        {
          src: 'https://i.ibb.co/1RDzftV/Lickitung2.jpg',
        },
        {
          src: 'https://i.ibb.co/jRhHDbH/Lickitung3.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: 'hero content',
        },
        {
          User: {
            nickname: 'academy',
          },
          content: 'academy content',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoadging: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoadging: false,
  addCommentDone: false,
  addCommentError: null,
};

export const addPost = (data) => ({
  type: actions.ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: actions.ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: '더미 데이터 입니다.',
  User: {
    id: 1,
    nickname: 'Splin',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoadging: true,
        addPostDone: false,
        addPostError: null,
      };
    case actions.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoadging: false,
        addPostDone: true,
      };
    case actions.ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoadging: false,
        addPostError: action.error,
      };
    case actions.ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoadging: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case actions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addCommentLoadging: false,
        addCommentDone: true,
      };
    case actions.ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoadging: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
