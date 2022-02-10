import telephonesLogin from "assets/images/telephonesLoginImg.png";

import SignForma from "components/common/sign-form";
import SignFooter from "components/common/sign-footer";

import { SignContainer, SignMain, SignArticle } from "./styles";

const SignIn = () => (
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

export default SignIn;
