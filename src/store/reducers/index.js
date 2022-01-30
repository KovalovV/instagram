import { combineReducers } from "redux";
import userReducer from "./user";
import selectedUserReducer from "./selectedUser";
import postReducer from "./post";
import postingReducer from "./posting";

const rootReducer = combineReducers({
  user: userReducer,
  selectedUser: selectedUserReducer,
  post: postReducer,
  posting: postingReducer,
});

export default rootReducer;
