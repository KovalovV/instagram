import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";

import instagramLoginLogo from "assets/images/instagramLoginLogo.png";

import { Icon } from "components/common/icons";
import Input from "components/common/input";

import { SignForm, SignButton, Or, SignGoogle } from "./styles";

const ForgotPasswordForm = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [formData, setFormData] = useState({ email: "" });

  const navigation = useNavigate();

  const { email } = formData;

  const onChange = (e) => {
    setIsDisable(email.length === 0 || email.length === 1);

    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success(`Reset password mail was sended to ${email}`);
      navigation("/sign-in");
    } catch (error) {
      toast.error("Some problems!");
    }
  };

  return (
    <SignForm as="form" onSubmit={onSubmit}>
      <img src={instagramLoginLogo} alt="Instagram logo" />
      <Input
        type="email"
        border="dark"
        bgColor="grey"
        id="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <SignButton
        type="submit"
        size="full"
        color="white"
        bgColor="blue"
        disabled={isDisable}
      >
        Send Email
      </SignButton>
      <Or>
        <div className="line" />
        <span>Or</span>
        <div className="line" />
      </Or>
      <SignGoogle>
        <Icon icon="googleIcon" />
        <p>Log In with Google</p>
      </SignGoogle>
    </SignForm>
  );
};

export default ForgotPasswordForm;
