import styled from "styled-components";
import { flex } from "utils/flex";

export const StyledEmptyModal = styled.div`
  ${flex.center}
  flex-direction: column;
  padding: 20px;
  color: #262626;

  h2 {
    font-size: 22px;
    line-height: 26px;
    font-weight: 300;
    padding: 20px 0px;
  }

  /* .prompt {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  } */
`;

export const UserSuggestionsContainer = styled.div`
  padding: 12px;
`;
