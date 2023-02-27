import shortid from 'shortid';
import produce from 'immer';
import { faker } from '@faker-js/faker';
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
          id: shortid.generate(),
          src: 'https://i.ibb.co/WPKYdQK/Lickitung1.jpg',
        },
        {
          id: shortid.generate(),
          src: 'https://i.ibb.co/1RDzftV/Lickitung2.jpg',
        },
        {
          id: shortid.generate(),
          src: 'https://i.ibb.co/jRhHDbH/Lickitung3.jpg',
        },
      ],
      Comments: [
        {
          id: shortid.generate(),
          User: {
            id: shortid.generate(),
            nickname: 'hero',
          },
          content: 'hero content',
        },
        {
          id: shortid.generate(),
          User: {
            id: shortid.generate(),
            nickname: 'academy',
          },
          content: 'academy content',
        },
      ],
    },
  ],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoadging: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoadging: false,
  addPostDone: false,
  addPostError: null,
  removePostLoadging: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoadging: false,
  addCommentDone: false,
  addCommentError: null,
};

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
  id: shortid.generate(),
  User: {
    id: shortid.generate(),
    nickname: faker.name.fullName(),
  },
  content: faker.lorem.paragraph(),
  Images: [{ src: faker.image.image() }],
  Comments: [{
    User: {
      id: shortid.generate(),
      nickname: faker.name.fullName(),
    },
    content: faker.lorem.sentence(),
  }],
}));

export const addPost = (data) => ({
  type: actions.ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: actions.ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'Splin',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data.content,
  User: {
    id: 1,
    nickname: 'Splin',
  },
});

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지켜야 함)
const reducer = (state = initialState, action) =>
  // immber를 사용하여 불변성을 신경쓰지 않고 개발할 수 있음
  produce(state, (draft) => {
    switch (action.type) {
      case actions.LOAD_POSTS_REQUEST:
        draft.loadPostsLoadging = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case actions.LOAD_POSTS_SUCCESS:
        draft.loadPostsLoadging = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 30;
        break;
      case actions.LOAD_POSTS_FAILURE:
        draft.loadPostsLoadging = false;
        draft.loadPostsError = action.error;
        break;
      case actions.ADD_POST_REQUEST:
        draft.addPostLoadging = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case actions.ADD_POST_SUCCESS:
        draft.addPostLoadging = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case actions.ADD_POST_FAILURE:
        draft.addPostLoadging = false;
        draft.addPostError = action.error;
        break;
      case actions.ADD_COMMENT_REQUEST:
        draft.addCommentLoadging = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case actions.ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((mainPost) => mainPost.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data));
        draft.addCommentLoadging = false;
        draft.addCommentDone = true;
        break;
      }
      case actions.ADD_COMMENT_FAILURE:
        draft.addCommentLoadging = false;
        draft.addCommentError = action.error;
        break;
      case actions.REMOVE_POST_REQUEST:
        draft.removePostLoadging = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case actions.REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((post) => post.id !== action.data);
        draft.removePostLoadging = false;
        draft.removePostDone = true;
        break;
      case actions.REMOVE_POST_FAILURE:
        draft.removePostLoadging = false;
        draft.removePostError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
