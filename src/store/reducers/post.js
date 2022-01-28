const initialState = {
  posts: [],
  saved: [],
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
    default:
      return state;
  }
};

export default postReducer;
