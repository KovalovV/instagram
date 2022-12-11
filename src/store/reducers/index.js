import { combineReducers } from "redux";
import userReducer from "./user";
import selectedUserReducer from "./selectedUser";
import postReducer from "./post";
import postingReducer from "./posting";
import callReducer from "./call";

const rootReducer = combineReducers({
  user: userReducer,
  selectedUser: selectedUserReducer,
  post: postReducer,
  posting: postingReducer,
  call: callReducer,
});

export default rootReducer;
