/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
// import store from "store";
import { setCurrentUserThunk } from "store/thunks/user";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getTheme } from "config/theme";

import NavBar from "components/common/nav-bar";

import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import ForgotPassword from "pages/forgot-password";
import Home from "pages/home";
import UserProfile from "pages/user-profile";
import EditProfile from "pages/edit-profile";
import Posting from "pages/create-post";
import PostView from "pages/post-view";
import NotFound from "pages/not-found";

import LoaderScreen from "components/common/loader-screen";

import GlobalStyles from "styles/globalStyles";

const App = () => {
  const dispatch = useDispatch();

  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    dispatch(setCurrentUserThunk()).finally(() => {
      setIsAuthLoading(false);
    });
  }, [dispatch]);

  if (isAuthLoading) {
    return <LoaderScreen />;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <Router>
        <GlobalStyles />
        <ToastContainer />
        <NavBar />
        {/* <Outlet /> */}
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/u/:userLogin" element={<UserProfile />} />
          <Route path="/:accounts/edit" element={<EditProfile />} />
          <Route path="/create/:postingStep" element={<Posting />} />
          <Route path="/p/:postId" element={<PostView />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={<NotFound />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
