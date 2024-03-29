import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { StyledButton } from "components/common/button/styles";

export const Center = styled.div`
  ${flex.alignCenter}
  ${flex.justifyCenter}
  height: 100%;
`;

export const CallContainer = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;

    ${up(breakpoints.smd)} {
      flex-direction: row;
    }
  `
);

export const Card = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    min-height: auto;
    border-radius: 8px;
    background-color: #1f1f1f;
    overflow: hidden;

    ${up(breakpoints.smd)} {
      min-height: 360px;
    }
  `
);

export const UserVideo = styled.div`
  position: relative;
`;

export const Video = styled.video(
  ({ theme: { up, breakpoints } }) => css`
    height: 42vh;
    width: 90vw;

    ${up(breakpoints.smd)} {
      height: 60vh;
      width: 45vw;
    }
  `
);

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  height: 64px;
  padding: 11px 0;
  background-color: #1f1f1f;
`;

export const Action = styled.div`
  background-color: #363636;
  border-radius: 50%;

  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    color: #fff;
    fill: #fff;
    padding: 5px;
  }

  &:nth-child(3) {
    background-color: #ff443d;
  }
`;

export const MuteCamera = styled.div`
  ${flex.alignCenter}
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    width: 68px;
    height: 68px;
    color: #b0b3b8;
    fill: #b0b3b8;
    padding: 5px;
  }

  h4 {
    color: #b0b3b8;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const CallButton = styled(StyledButton)`
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 5px 9px;
  margin-top: 8px;
  margin-bottom: 8px;

  background-color: #429aff;

  &:disabled {
    opacity: 0.5;
  }
`;

export const CallInfo = styled.div`
  ${flex.alignCenter}
  ${flex.justifyCenter}
  flex-direction: column;
  height: 100%;
  min-width: 256px;
`;
