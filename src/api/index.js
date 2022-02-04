import * as user from "./user";
import * as store from "./store";
// eslint-disable-next-line import/no-cycle
import * as post from "./post";

export const api = {
  user,
  post,
  store,
};
