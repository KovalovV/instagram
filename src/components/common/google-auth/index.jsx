import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Icon } from "components/common/icons";

import { googleAuthThunk } from "store/thunks/user";

// import { api } from "api";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "firebase.config";

import { SignGoogle } from "./styles";

const GoogleAuth = ({ isSignUpPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoogleClick = async () => {
    try {
      await dispatch(googleAuthThunk());

      toast.success(`Sign ${isSignUpPage ? "up" : "in"} successful!`);
      navigate("/");
    } catch (error) {
      toast.error("Somethig went wrong!");
    }
  };

  return (
    <SignGoogle onClick={onGoogleClick}>
      <Icon icon="googleIcon" />
      <p>{isSignUpPage ? "Register" : "Log In"} with Google</p>
    </SignGoogle>
  );
};

export default GoogleAuth;
