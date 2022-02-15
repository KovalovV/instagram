/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";

import installAppAndroid from "assets/images/installAppAndroid.png";
import installAppIos from "assets/images/installAppIos.png";

import { SignUpInCard, GetApp } from "./styles";

const SignIn = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/sign-up";

  return (
    <>
      <SignUpInCard>
        {isSignUpPage ? "You" : "Don't"} have an account?
        <Link to={isSignUpPage ? "/sign-in" : "/sign-up"}>
          {" "}
          Sign {isSignUpPage ? "in" : "up"}
        </Link>
      </SignUpInCard>
      <GetApp>
        <p>Get the app.</p>
        <div className="install-store">
          <a
            href="https://play.google.com/store/apps"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={installAppAndroid} alt="install Android" />
          </a>
          <a
            href="https://www.apple.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={installAppIos} alt="install Ios" />
          </a>
        </div>
      </GetApp>
    </>
  );
};

export default SignIn;
