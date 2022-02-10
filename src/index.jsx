/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import ForgotPassword from "pages/forgot-password";
import Home from "pages/home";
import UserProfile from "pages/user-profile";
import EditProfile from "pages/edit-profile";
import Posting from "pages/create-post";
import PostView from "pages/post-view";
import NotFound from "pages/not-found";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="u/:userLogin" element={<UserProfile />} />
            <Route path=":accounts/edit" element={<EditProfile />} />
            <Route path="create/:postingStep" element={<Posting />} />
            <Route path="p/:postId" element={<PostView />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router> */}
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
