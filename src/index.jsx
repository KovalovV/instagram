import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "store";

import { setCurrentUserThunk } from "store/thunks/user";

import LoaderScreen from "components/common/loader-screen";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Root = () => {
  const dispatch = useDispatch();
  const { isUserLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setCurrentUserThunk());
  }, []);

  return isUserLoading ? <LoaderScreen /> : <App />;
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
