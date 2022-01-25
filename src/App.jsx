/* eslint-disable jsx-a11y/alt-text */
import { Provider } from "react-redux";
import store from "store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getTheme } from "config/theme";

import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import ForgotPassword from "pages/forgot-password";
import Home from "pages/home";

import GlobalStyles from "styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <Router>
          <GlobalStyles />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
