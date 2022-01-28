import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const ContentType = styled.div(
  ({ theme: { down } }) => css`
    ${flex.center}
    border-top: 1px solid #dbdbdb;
    color: #8e8e8e;
    font-size: 12px;
    text-transform: uppercase;

    a {
      ${flex.center}
      height: 52px;
      text-align: center;
      letter-spacing: 1px;
      margin-right: 60px;
    }

    a:last-of-type {
      margin-right: 0px;
    }

    svg {
      margin-right: 5px;
    }

    ${down(735)} {
      a {
        height: 44px;
        margin-right: 0px;
        flex-basis: 25%;
      }

      svg {
        width: 24px;
        height: 24px;
      }

      span {
        display: none;
      }
    }
  `
);

export const Posts = styled.div(
  ({ theme: { up } }) => css`
    border-top: 1px solid #dbdbdb;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;

    /* display: grid;
    grid-template-columns: repeat(3, minmax(100px, 293px));
    justify-content: center;
    grid-gap: 2px; */

    ${up(735)} {
      border-top: none;
    }
  `
);

export const PostItem = styled.div`
  height: 33vh;
  img {
    width: 100%;
    height: 100%;
  }
`;
