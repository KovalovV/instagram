import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const Flex = styled.div`
  ${flex.alignCenter}
  ${flex.justifyBetween}
`;

export const MessengerContainer = styled.div``;

export const HeaderMessenger = styled.div`
  height: 60px;
  padding: 0 30px 0 20px;
  border-bottom: 1px solid #dbdbdb;
`;
