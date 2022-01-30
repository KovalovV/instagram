import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./post";
import postingReducer from "./posting";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  posting: postingReducer,
});

export default rootReducer;
