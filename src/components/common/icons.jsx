import React from "react";

import { ReactComponent as ExploreIcon } from "assets/icons/exploreIcon.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/googleIcon.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heartIcon.svg";
import { ReactComponent as LikeIcon } from "assets/icons/likeIcon.svg";
import { ReactComponent as MessengerIcon } from "assets/icons/messengerIcon.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/optionsIcon.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plusIcon.svg";
import { ReactComponent as PostsIcon } from "assets/icons/postsIcon.svg";
import { ReactComponent as SavedIcon } from "assets/icons/savedIcon.svg";
import { ReactComponent as SearchIcon } from "assets/icons/searchIcon.svg";
import { ReactComponent as TagIcon } from "assets/icons/tagIcon.svg";
import { ReactComponent as VideoIcon } from "assets/icons/videoIcon.svg";

const getIcon = (iconName) => {
  switch (iconName) {
    case "exploreIcon":
      return <ExploreIcon />;
    case "googleIcon":
      return <GoogleIcon />;
    case "heartIcon":
      return <HeartIcon />;
    case "likeIcon":
      return <LikeIcon />;
    case "messengerIcon":
      return <MessengerIcon />;
    case "plusIcon":
      return <PlusIcon />;
    case "optionsIcon":
      return <OptionsIcon />;
    case "postsIcon":
      return <PostsIcon />;
    case "savedIcon":
      return <SavedIcon />;
    case "searchIcon":
      return <SearchIcon />;
    case "tagIcon":
      return <TagIcon />;
    case "videoIcon":
      return <VideoIcon />;

    default:
      return <span />;
  }
};

export const Icon = ({ icon }) => React.cloneElement(getIcon(icon));
