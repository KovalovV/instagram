/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";

import telephonesLogin from "assets/images/telephonesLoginImg.png";
import installAppAndroid from "assets/images/installAppAndroid.png";
import installAppIos from "assets/images/installAppIos.png";

import ForgotPasswordForm from "components/forgot-password/forgot-form";

import {
  SignContainer,
  SignMain,
  SignArticle,
  SignUpInCard,
  GetApp,
} from "./styles";

const ForgotPassword = () => {
  const location = useLocation();

  return (
    <SignContainer>
      <SignArticle>
        <img src={telephonesLogin} alt="Telephones" />
      </SignArticle>
      <SignMain>
        <ForgotPasswordForm />
        <SignUpInCard>
          Don&apos;t have an account?
          <Link to="/sign-up"> Sign up</Link>
        </SignUpInCard>
        <GetApp>
          <p>Get the app.</p>
          <div className="install-store">
            <a href="https://www.apple.com/">
              <img src={installAppAndroid} alt="install Android" />
            </a>
            <a href="https://www.apple.com/">
              <img src={installAppIos} alt="install Ios" />
            </a>
          </div>
        </GetApp>
      </SignMain>
    </SignContainer>
  );
};

export default ForgotPassword;
