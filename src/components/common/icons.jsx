import React from "react";

import { ReactComponent as BorderCommentIcon } from "assets/icons/borderCommentIcon.svg";
import { ReactComponent as ExploreIcon } from "assets/icons/exploreIcon.svg";
import { ReactComponent as GreyInstagramIcon } from "assets/icons/greyInstagramIcon.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/googleIcon.svg";
import { ReactComponent as FilledHeartIcon } from "assets/icons/filledHeartIcon.svg";
import { ReactComponent as FilledSavedIcon } from "assets/icons/filledSavedIcon.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heartIcon.svg";
import { ReactComponent as HomeIcon } from "assets/icons/homeIcon.svg";
import { ReactComponent as LikeIcon } from "assets/icons/likeIcon.svg";
import { ReactComponent as DirectIcon } from "assets/icons/directIcon.svg";
import { ReactComponent as MoreOptionsIcon } from "assets/icons/moreOptionsIcon.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/optionsIcon.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plusIcon.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profileIcon.svg";
import { ReactComponent as PostsIcon } from "assets/icons/postsIcon.svg";
import { ReactComponent as PeopleIcon } from "assets/icons/peopleIcon.svg";
import { ReactComponent as SavedIcon } from "assets/icons/savedIcon.svg";
import { ReactComponent as SearchIcon } from "assets/icons/searchIcon.svg";
import { ReactComponent as MediaIcon } from "assets/icons/mediaIcon.svg";
import { ReactComponent as TagIcon } from "assets/icons/taggedIcon.svg";
import { ReactComponent as VideoIcon } from "assets/icons/videoIcon.svg";
import { ReactComponent as CameraIcon } from "assets/icons/cameraIcon.svg";
import { ReactComponent as CloseIcon } from "assets/icons/closeIcon.svg";
import { ReactComponent as CloseModalIcon } from "assets/icons/closeModalIcon.svg";
import { ReactComponent as CommentIcon } from "assets/icons/commentIcon.svg";
import { ReactComponent as VerifiedIcon } from "assets/icons/verifiedIcon.svg";
import { ReactComponent as MessengerIcon } from "assets/icons/messengerIcon.svg";
import { ReactComponent as CallIcon } from "assets/icons/callIcon.svg";
import { ReactComponent as VideoCameraIcon } from "assets/icons/videoCameraIcon.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphoneIcon.svg";
import { ReactComponent as MuteVideoCameraIcon } from "assets/icons/muteVideoCameraIcon.svg";
import { ReactComponent as MuteMicrophoneIcon } from "assets/icons/muteMicrophoneIcon.svg";
import { ReactComponent as HandsetIcon } from "assets/icons/handsetIcon.svg";
import { ReactComponent as HandsetAnswerIcon } from "assets/icons/handsetAnswerIcon.svg";

import { ReactComponent as Spinner } from "assets/spinner.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "borderCommentIcon":
      return <BorderCommentIcon />;
    case "exploreIcon":
      return <ExploreIcon />;
    case "handsetIcon":
      return <HandsetIcon />;
    case "handsetAnswerIcon":
      return <HandsetAnswerIcon />;
    case "videoCameraIcon":
      return <VideoCameraIcon />;
    case "muteVideoCameraIcon":
      return <MuteVideoCameraIcon />;
    case "microphoneIcon":
      return <MicrophoneIcon />;
    case "muteMicrophoneIcon":
      return <MuteMicrophoneIcon />;
    case "googleIcon":
      return <GoogleIcon />;
    case "greyInstagramIcon":
      return <GreyInstagramIcon />;
    case "filledHeartIcon":
      return <FilledHeartIcon />;
    case "filledSavedIcon":
      return <FilledSavedIcon />;
    case "messengerIcon":
      return <MessengerIcon />;
    case "heartIcon":
      return <HeartIcon />;
    case "homeIcon":
      return <HomeIcon />;
    case "likeIcon":
      return <LikeIcon />;
    case "callIcon":
      return <CallIcon />;
    case "directIcon":
      return <DirectIcon />;
    case "moreOptionsIcon":
      return <MoreOptionsIcon />;
    case "plusIcon":
      return <PlusIcon />;
    case "optionsIcon":
      return <OptionsIcon />;
    case "postsIcon":
      return <PostsIcon />;
    case "peopleIcon":
      return <PeopleIcon />;
    case "profileIcon":
      return <ProfileIcon />;
    case "savedIcon":
      return <SavedIcon />;
    case "searchIcon":
      return <SearchIcon />;
    case "mediaIcon":
      return <MediaIcon />;
    case "taggedIcon":
      return <TagIcon />;
    case "videoIcon":
      return <VideoIcon />;
    case "verifiedIcon":
      return <VerifiedIcon />;
    case "cameraIcon":
      return <CameraIcon />;
    case "closeIcon":
      return <CloseIcon />;
    case "closeModalIcon":
      return <CloseModalIcon />;
    case "commentIcon":
      return <CommentIcon />;

    case "spinner":
      return <Spinner />;

    default:
      return <span />;
  }
};

export const Icon = ({ icon, onClick, className, ...props }) =>
  React.cloneElement(getIcon(icon), {
    onClick,
    className,
    ...props,
  });
