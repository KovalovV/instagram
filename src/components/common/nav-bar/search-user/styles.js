import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const SearchWrapper = styled.div(
  ({ theme: { up } }) => css`
    display: none;
    position: relative;

    ${up(645)} {
      display: block;
      min-width: 125px;
      width: 268px;
      height: 100%;
    }
  `
);

export const SearchResultsWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 150vw;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, 0%);

    width: 14px;
    height: 14px;

    border: 1px solid #fff;

    background: #fff;
    box-shadow: -3px -3px 3px rgba(0, 0, 0, 0.0975);

    transform: rotate(45deg);
  }
`;

export const SearchResults = styled.div`
  position: relative;
  top: 2px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: #fff;

  width: 365px;
  height: 375px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-top: 12px;

  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  border-radius: 6px;
`;

export const ShortUserInfoWrapper = styled.div`
  width: 100%;

  &:hover {
    background-color: #fafafa;
  }
`;

export const EmptyResult = styled.p`
  ${flex.center}
  color: #8e8e8e;
  font-size: 14px;
  height: 100%;
  padding: 15px;
`;
