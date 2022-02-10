/* eslint-disable no-nested-ternary */
import { useState } from "react";

import Button from "components/common/button";
import Spinner from "components/common/spinner";

const FollowButton = ({ size, isFollowing, handleFollow }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => setIsLoading((prevState) => !prevState);

  const onClick = async () => {
    handleIsLoading();
    await handleFollow();
    handleIsLoading();
  };

  return (
    <Button
      type="followProfile"
      size={size}
      color={isFollowing ? "dark" : "white"}
      bgColor={isFollowing ? "white" : "blue"}
      border={isFollowing ? "grey" : "none"}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner width="18px" height="18px" />
      ) : isFollowing ? (
        "Unfollow"
      ) : (
        "Follow"
      )}
    </Button>
  );
};

export default FollowButton;
