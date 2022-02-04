import styled, { css } from "styled-components";
import { flex } from "utils/flex";

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
    min-height: 280px;
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
      min-height: 240px;

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

export const HeaderDetails = styled.div`
  ${flex.alignCenter}
  width: 100%;
  height: 60px;
  padding: 15px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  h1 {
    color: #262626;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
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

export const DescriptionHeader = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    line-height: 20px;
  }

  .login {
    color: #262626;
    font-weight: 600;
    font-size: 16px;

    margin-top: -5px;
    margin-right: 5px;
    display: inline-flex;
  }

  .publacation-date {
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 15px 0px;
  }
`;

export const ActionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dbdbdb;
  border-bottom-right-radius: 10px;
  background-color: #fff;
`;

export const LikeInfo = styled.div`
  padding: 0px 16px;
  color: #262626;
  font-weight: 600;
`;
