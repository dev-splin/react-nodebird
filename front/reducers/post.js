export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Splin",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://i.ibb.co/WPKYdQK/Lickitung1.jpg",
        },
        {
          src: "https://i.ibb.co/1RDzftV/Lickitung2.jpg",
        },
        {
          src: "https://i.ibb.co/jRhHDbH/Lickitung3.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          content: "hero content",
        },
        {
          User: {
            nickname: "academy",
          },
          content: "academy content",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미 데이터 입니다.",
  User: {
    id: 1,
    nickname: "Splin",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
