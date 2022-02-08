import styled, { css } from "styled-components";

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
