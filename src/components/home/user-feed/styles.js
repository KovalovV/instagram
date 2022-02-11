import styled, { css } from "styled-components";

export const StyledUserFeed = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    max-width: 935px;
    width: 100%;

    ${up(breakpoints.lg)} {
      max-width: 614px;
      margin-right: 28px;
    }
  `
);

export const LikeInfo = styled.div`
  padding: 0px 16px;
  padding-bottom: 8px;
  color: #262626;
  font-weight: 600;
`;

export const AllComments = styled.div`
  color: #8e8e8e;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 0px 16px;
  margin-top: 4px;
`;

export const Post = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    max-width: 614px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    margin: 0 auto;
    margin-bottom: 24px;

    ${up(breakpoints.lg)} {
    }
  `
);

export const Image = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
