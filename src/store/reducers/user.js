const initialState = {
  currentUser: {},
  authed: false,
  isUserLoading: true,
};

const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
        authed: true,
        isUserLoading: false,
      };
    case "SET_UPDATED_USER":
      return {
        ...state,
        currentUser: payload,
      };
    case "IS_USER_LOADING":
      return {
        ...state,
        isUserLoading: payload,
      };
    case "SIGN_OUT_USER":
      return {
        ...state,
        currentUser: {},
        authed: false,
        isUserLoading: true,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
