import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const Flex = styled.div(
  ({ theme: { up, down } }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${up(735)} {
      flex-direction: row;
    }

    ${down(735)} {
      overflow: scroll;
    }
  `
);

export const Modal = styled.div(
  ({ theme: { down } }) => css`
    width: 696px;
    height: 391px;
    background-color: #fff;
    color: #262626;
    border-radius: 10px;

    ${down(735)} {
      width: 348px;
    }
  `
);

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  form {
    width: 100%;
    height: 348px;
  }
`;

export const Center = styled.div`
  ${flex.center}
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  /* ${flex.center} */
  display: flex;
  width: 100%;
  height: 41px;
  border-bottom: 1px solid rgba(219, 219, 219, 1);

  .corner {
    ${flex.center}
    flex: 0 0 65px;
    padding: 12px;
  }

  h1 {
    ${flex.center}
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PostImage = styled.div(
  ({ theme: { down } }) => css`
    width: 50%;

    img {
      width: 100%;
      height: 100.5%;
      border-radius: 5px;
    }

    ${down(735)} {
      width: 100%;
    }
  `
);

export const PostDetails = styled.div(
  ({ theme: { down } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;

    label {
      position: absolute;
      color: #c7c7c7;
      font-size: 14px;
      bottom: 10px;
      left: 10px;
    }

    ${down(735)} {
      width: 100%;

      label {
        bottom: 65px;
        left: 290px;
      }
    }
  `
);
