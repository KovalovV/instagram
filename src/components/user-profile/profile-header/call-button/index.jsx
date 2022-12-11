/* eslint-disable no-nested-ternary */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOutcomeUserThunk } from "store/thunks/call";
import { setShowCallModal } from "store/actions/call";

import Button from "components/common/button";
import Spinner from "components/common/spinner";

const CallButton = ({ size }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.selectedUser.selectedUserProfile);

  const handleIsLoading = () => setIsLoading((prevState) => !prevState);

  const onClick = async () => {
    handleIsLoading();
    dispatch(setOutcomeUserThunk(id));
    dispatch(setShowCallModal(true));
    handleIsLoading();
  };

  return (
    <Button
      type="followProfile"
      size={size}
      color="white"
      bgColor="green"
      border="none"
      onClick={onClick}
    >
      {isLoading ? <Spinner width="18px" height="18px" /> : "Call"}
    </Button>
  );
};

export default CallButton;
