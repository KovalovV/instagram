import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const Flex = styled.div`
  ${flex.alignCenter}
  ${flex.justifyBetween}
`;

export const ModalWrapper = styled.div`
  ${flex.center}
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);

  z-index: 20;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const PostContainer = styled.div(
  ({ theme: { up } }) => css`
    display: flex;
    background-color: #fff;
    color: #262626;
    border-radius: 10px;

    min-height: 480px;
    max-height: 650px;
    width: 100%;
    max-width: 1000px;
    margin: 24px 64px;

    ${up(735)} {
      border-top: none;
    }
  `
);

export const Image = styled.div(
  ({ theme: { up } }) => css`
    display: none;
    ${flex.center}
    width: 0%;
    min-height: 280px;
    max-height: 650px;
    background-color: #000;

    .image-container {
      ${flex.center}
      width: 100%;
    }

    img {
      display: none;
      width: 100%;
      min-height: auto;
      max-height: 650px;
    }

    ${up(735)} {
      display: flex;
      width: 100%;

      img {
        display: block;
      }
    }
  `
);

export const MobileImage = styled.div(
  ({ theme: { down } }) => css`
    display: none;
    width: 100%;
    min-height: 240px;
    max-height: 650px;
    background-color: #000;

    .image-container {
      ${flex.center}
      width: 100%;
    }

    img {
      width: 100%;
      min-height: auto;
      max-height: 650px;
    }

    ${down(735)} {
      display: flex;
      max-height: 240px;

      img {
        width: auto;
        height: 100%;
      }
    }
  `
);

export const Details = styled.div(
  ({ theme: { up } }) => css`
    position: relative;
    width: 100%;
    min-width: 355px;

    ${up(735)} {
      max-width: 400px;
    }
  `
);

export const LikeInfo = styled.div`
  padding: 0px 16px;
  color: #262626;
  font-weight: 600;
`;

export const Comments = styled.div(
  ({ theme: { up } }) => css`
    display: none;
    overflow-y: scroll;
    scrollbar-width: none;
    padding: 15px;
    max-height: calc(100% - 225px);
    max-width: 100%;
    border-top: 1px solid #dbdbdb;

    .description {
      width: 100%;
      height: auto;
    }

    ${up(735)} {
      display: block;
    }
  `
);

export const ActionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dbdbdb;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
`;
