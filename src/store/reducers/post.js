const initialState = {
  currentUser: {},
  authed: false,
  isUserLoading: true,
};

const postReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUse: payload,
        authed: true,
        isUserLoading: false,
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        currentUser: {},
        authed: false,
      };
    case "IS_USER_LOADING":
      return {
        ...state,
        isUserLoading: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
