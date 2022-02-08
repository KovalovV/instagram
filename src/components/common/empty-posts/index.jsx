import { Icon } from "components/common/icons";

import { StyledEmptyPosts } from "./styles";

const EmptyPosts = ({ contentLength }) =>
  !contentLength ? (
    <StyledEmptyPosts>
      <Icon icon="cameraIcon" />
      <p>No Posts Yet</p>
    </StyledEmptyPosts>
  ) : (
    <span />
  );

export default EmptyPosts;
