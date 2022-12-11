import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getTheme } from "config/theme";

import NavBar from "components/common/nav-bar";

import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import ForgotPassword from "pages/forgot-password";
import Home from "pages/home";
import Direct from "pages/direct";
import UserProfile from "pages/user-profile";
import EditProfile from "pages/edit-profile";
import Posting from "pages/create-post";
import PostView from "pages/post-view";
import NotFound from "pages/not-found";

import Messenger from "components/direct/messenger";
import Call from "components/direct/call";
import CallNotifications from "components/direct/call-notifications";

import GlobalStyles from "styles/globalStyles";

import { PrivateRoute } from "routes/private-route";

const App = () => (
  <ThemeProvider theme={getTheme()}>
    <Router>
      <GlobalStyles />
      <ToastContainer />
      <NavBar />
      <CallNotifications />
      <Call />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/u/:userLogin"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/:accounts/edit"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/create/:postingStep"
          element={
            <PrivateRoute>
              <Posting />
            </PrivateRoute>
          }
        />
        <Route
          path="/p/:postId"
          element={
            <PrivateRoute>
              <PostView />
            </PrivateRoute>
          }
        />
        <Route
          path="/direct"
          element={
            <PrivateRoute>
              <Direct />
            </PrivateRoute>
          }
        >
          <Route
            path="/direct/t/:chatId"
            element={
              <PrivateRoute>
                <Messenger />
              </PrivateRoute>
            }
          />
        </Route>
        {/* <Route
          path="/call/:roomId"
          element={
            <PrivateRoute>
              <Call />
            </PrivateRoute>
          }
        /> */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
