const initialState = {
  posts: [],
  saved: [],
  selectedPost: {},
  isPostLoading: true,
};

const postReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_USER_POSTS":
      return {
        ...state,
        posts: payload,
        isPostLoading: false,
      };
    case "SET_USER_SAVED_POSTS":
      return {
        ...state,
        saved: payload,
        isPostLoading: false,
      };
    case "SET_SELECTED_POST":
      return {
        ...state,
        selectedPost: payload,
        isPostLoading: false,
      };
    case "SET_POST_COMMENTS":
      return {
        ...state,
        comments: payload,
        isPostLoading: false,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
