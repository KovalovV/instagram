import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { StyledButton } from "components/common/button/styles";

export const Center = styled.div`
  ${flex.alignCenter}
  ${flex.justifyCenter}
  height: 100%;
`;

export const Card = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    height: 35vh;
    border-radius: 8px;
    background-color: #1f1f1f;
    overflow: hidden;

    ${up(breakpoints.smd)} {
      min-height: 360px;
      height: auto;
    }
  `
);

export const CallButton = styled(StyledButton)`
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 5px 9px;
  margin-top: 32px;
  margin-bottom: 8px;

  background-color: #429aff;

  &:disabled {
    opacity: 0.5;
  }
`;

export const CallInfoCointainer = styled.div`
  ${flex.alignCenter}
  ${flex.justifyCenter}
  flex-direction: column;
  height: 100%;
  min-width: 256px;
`;

export const OutcomeUserInfo = styled.div`
  ${flex.alignCenter}
  ${flex.justifyCenter}
  flex-direction: column;
  width: 30vw;

  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin-bottom: 28px;
  }

  h3 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
  }
`;
