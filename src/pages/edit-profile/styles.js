import styled, { css } from "styled-components";

export const Card = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    width: 100%;

    ${up(breakpoints.sm)} {
      padding: 20px 0px;
      background-color: #fff;
      border: 1px solid #dbdbdb;
    }
  `
);

export const MainContainer = styled(Card)``;
