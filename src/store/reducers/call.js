const initialState = {
  outcomeUser: null,
  showCallModal: false,
};

const callReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case "SET_CALL_MODAL":
      return {
        ...state,
        showCallModal: payload,
      };
    case "SET_OUTCOME_USER":
      return {
        ...state,
        outcomeUser: payload,
      };
    default:
      return { ...state };
  }
};

export default callReducer;
