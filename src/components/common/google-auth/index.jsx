import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Icon } from "components/common/icons";

import { googleAuthThunk } from "store/thunks/user";

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
