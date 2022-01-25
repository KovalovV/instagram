/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from "react-router-dom";

import telephonesLogin from "assets/images/telephonesLoginImg.png";
import installAppAndroid from "assets/images/installAppAndroid.png";
import installAppIos from "assets/images/installAppIos.png";

import SignForma from "components/common/sign-form";
import SignFooter from "components/common/sign-footer";

import {
  SignContainer,
  SignMain,
  SignArticle,
  SignUpInCard,
  GetApp,
} from "./styles";

const SignIn = () => {
  const location = useLocation();

  return (
    <SignContainer>
      <SignArticle>
        <img src={telephonesLogin} alt="Telephones" />
      </SignArticle>
      <SignMain>
        <SignForma />
        <SignFooter />
      </SignMain>
    </SignContainer>
  );
};

export default SignIn;
