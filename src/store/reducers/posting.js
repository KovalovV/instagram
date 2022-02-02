const initialState = {
  image: "",
  description: "",
  isPostingLoading: true,
};

const postingReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_IMAGE":
      return {
        ...state,
        image: payload,
        isPostLoading: false,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: payload,
        isPostLoading: false,
      };
    case "CLEAR_POSTING":
      return {
        ...state,
        image: "",
        description: "",
        isPostLoading: true,
      };
    default:
      return { ...state };
  }
};

export default postingReducer;
