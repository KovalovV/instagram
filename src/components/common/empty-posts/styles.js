import styled from "styled-components";
import { flex } from "utils/flex";

export const StyledEmptyPosts = styled.div`
  ${flex.center}
  flex-direction: column;
  padding: 20px;

  svg {
    margin: 50px;
  }

  p {
    font-weight: 300;
    color: #262626;
    font-size: 28px;
    line-height: 32px;
  }
`;
