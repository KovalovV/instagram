import { Icon } from "components/common/icons";

import { StyledEmptyPosts } from "./styles";

const EmptyPosts = ({ contentLength }) =>
  contentLength ? (
    <span />
  ) : (
    <StyledEmptyPosts>
      <Icon icon="cameraIcon" />
      <p>No Posts Yet</p>
    </StyledEmptyPosts>
  );

export default EmptyPosts;
