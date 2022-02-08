import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const ContentType = styled.div(
  ({ theme: { down } }) => css`
    ${flex.center}
    border-top: 1px solid #dbdbdb;
    color: #8e8e8e;
    font-size: 12px;
    text-transform: uppercase;

    .activeType {
      border-top: 1px solid #262626;
      color: #262626;

      svg {
        color: #262626;
      }
    }

    ${down(735)} {
      .activeType {
        border-top: none;
        svg {
          color: #0095f6;
          fill: #0095f6;
        }
      }
    }
  `
);

export const ContentTypeItem = styled.a(
  ({ theme: { down } }) => css`
    ${flex.center}
    height: 52px;
    text-align: center;
    letter-spacing: 1px;
    margin-right: 60px;

    &:last-of-type {
      margin-right: 0px;
    }

    svg {
      margin-right: 5px;
    }

    ${down(735)} {
      height: 44px;
      margin-right: 0px;
      flex-basis: 25%;

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
  ({ theme: { down, up } }) => css`
    border-top: 1px solid #dbdbdb;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 28px;

    ${up(735)} {
      border-top: none;
    }

    ${down(735)} {
      grid-gap: 3px;
    }
  `
);

export const PostItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ExtraInfo = styled.div`
  /* ${flex.center} */
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  color: #fff;

  &:hover {
    ${flex.center}
  }
`;

export const PostItem = styled.div`
  img {
    width: 100%;
    height: 100%;
  }

  &:hover + ${ExtraInfo} {
    ${flex.center}
  }
`;

export const InfoItem = styled.div`
  ${flex.alignCenter}

  &:first-child {
    margin-right: 20px;
  }

  svg {
    margin-right: 10px;
  }

  span {
    font-weight: 600;
  }
`;
