/* eslint-disable react/no-array-index-key */
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Icon } from "components/common/icons";
import Button from "components/common/button";

import UserSuggestions from "components/common/user-suggestions";

import ShortUserInfo from "components/common/short-user-info";

import FollowButton from "../follow-button";
import EmptyModal from "./empty-modal";

import {
  FollowModalWrapper,
  StyledFollowModal,
  Header,
  ContentList,
  FollowUser,
} from "./styles";

const FollowModal = ({
  modal,
  content,
  onClose,
  isFollowing,
  handleFollow,
}) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const followList =
    modal.modalType === "followers"
      ? content.selectedFollowers
      : content.selectedFollowing;

  const onKeydown = (key) => {
    if (key.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!modal.show || modal.modalType === "posts") {
    return null;
  }

  return (
    <FollowModalWrapper onClick={onClose}>
      <StyledFollowModal onClick={(e) => e.stopPropagation()}>
        <Header>
          <div className="corner" />
          <h1>{modal.modalType[0].toUpperCase() + modal.modalType.slice(1)}</h1>
          <div className="corner">
            <Button
              size="default"
              color="blue"
              bgColor="transparent"
              type="submit"
              onClick={onClose}
            >
              <Icon icon="closeModalIcon" fill="#262626" color="#262626" />
            </Button>
          </div>
        </Header>
        <ContentList>
          {followList.map((userId, index) => (
            <FollowUser key={userId}>
              <ShortUserInfo
                key={`${userId}-${index}`}
                userId={userId}
                width="30px"
                height="30px"
                withName
              />
              {userId !== currentUser.id && (
                <FollowButton
                  size="medium"
                  isFollowing={isFollowing(userId)}
                  handleFollow={() => handleFollow(userId)}
                />
              )}
            </FollowUser>
          ))}
          <EmptyModal contentLength={followList.length} type={modal.modalType}>
            <UserSuggestions width="44px" height="44px" type="dark" />
          </EmptyModal>
        </ContentList>
      </StyledFollowModal>
    </FollowModalWrapper>
  );
};

export default FollowModal;
