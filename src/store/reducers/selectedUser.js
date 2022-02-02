const initialState = {
  selectedUserProfile: {},
  isSelectedUserLoading: true,
};

const selectedUserReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_SELECTED_USER_PROFILE":
      return {
        ...state,
        selectedUserProfile: payload,
        isSelectedUserLoading: false,
      };
    //   case "LOG_OUT_USER":
    //     return {
    //       ...state,
    //       selectedUserProfile: {},
    //     };
    case "IS_SELECTED_USER_LOADING":
      return {
        ...state,
        isSelectedUserLoading: payload,
      };
    default:
      return { ...state };
  }
};

export default selectedUserReducer;
