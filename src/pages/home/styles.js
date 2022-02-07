import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const MainContainer = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    display: flex;
    position: relative;

    margin: 0 auto;
    margin-top: 60px;
    max-width: 935px;

    ${up(breakpoints.sm)} {
      margin-top: 90px;
    }
  `
);

export const UserFeed = styled.div(
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
  color: #262626;
  font-weight: 600;
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

export const AsideContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 935px;
`;

export const AsideFeed = styled.aside(
  ({ theme: { up, breakpoints } }) => css`
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    max-width: 293px;
    height: 100vh;
    margin-bottom: 30px;

    ${up(breakpoints.lg)} {
      display: block;
    }
  `
);

export const AsideFooter = styled.footer`
  max-width: 100%;
  text-transform: uppercase;
  color: #c7c7c7;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;

export const HeaderDetails = styled.div`
  ${flex.alignCenter}
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  margin-top: 18px;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 14px;
  }

  h1 {
    color: #262626;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: -5px;
  }

  p {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const HelpList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0px 10px;
  margin-bottom: 16px;

  li {
    ${flex.alignCenter}
    position: relative;
    color: #c7c7c7;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-transform: none;
  }

  li:after {
    content: "";
    position: absolute;
    display: block;
    right: -9px;
    transform: translateX(-50%);
    scale: 0.5;
    background-color: #c7c7c7;
    height: 4px;
    width: 4px;
    border-radius: 50%;
  }
`;
