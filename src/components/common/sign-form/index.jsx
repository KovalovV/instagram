import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signUpUserThunk, signInUserThunk } from "store/thunks/user";

import { toast } from "react-toastify";

import instagramLoginLogo from "assets/images/instagramLoginLogo.png";

import Input from "components/common/input";
import GoogleAuth from "components/common/google-auth";

import { SignForm, SignButton, Or, ForgotPassword } from "./styles";

const SignForma = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/sign-up";

  const signUpState = {
    login: "",
    email: "",
    password: "",
  };

  const signInState = {
    email: "",
    password: "",
  };

  const initialFormState = isSignUpPage ? signUpState : signInState;

  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const navigation = useNavigate();

  const valuesArray = Object.values(formData);
  const { login, email, password } = formData;

  const isEmptyFields = () => valuesArray.some((field) => field.length === 0);

  const onChange = (e) => {
    setIsDisable(isEmptyFields());

    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const isVisible = () => {
    setIsVisiblePass((prevState) => !prevState);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isSignUpPage) {
        await dispatch(signInUserThunk(formData));
        toast.success("Sign in success");
        navigation("/");
      } else {
        await dispatch(signUpUserThunk(formData));
        toast.success("New user created successfully");
        navigation("/");
      }
    } catch (error) {
      toast.error(`Some problems with sign ${isSignUpPage ? "up" : "in"}`);
    }
  };

  return (
    <SignForm as="form" onSubmit={onSubmit}>
      <img src={instagramLoginLogo} alt="Instagram logo" />
      {isSignUpPage ? (
        <Input
          type="textRegister"
          border="dark"
          bgColor="grey"
          id="login"
          placeholder="Login"
          value={login}
          onChange={onChange}
        />
      ) : (
        <span />
      )}

      <Input
        type="email"
        border="dark"
        bgColor="grey"
        id="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <Input
        type={isVisiblePass ? "passwordVisible" : "password"}
        border="dark"
        bgColor="grey"
        id="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
        onClick={isVisible}
      />
      <SignButton
        type="submit"
        size="full"
        color="white"
        bgColor="blue"
        disabled={isDisable}
      >
        {isSignUpPage ? "Register" : "Log In"}
      </SignButton>
      <Or>
        <div className="line" />
        <span>Or</span>
        <div className="line" />
      </Or>
      <GoogleAuth />
      <ForgotPassword>
        <Link to="/forgot-password">Forgot password?</Link>
      </ForgotPassword>
    </SignForm>
  );
};

export default SignForma;
