import styled, { css } from "styled-components";

export const StyledDate = styled.p(
  ({ uppercase, marginLeft }) => css`
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 15px 0px;
    margin-left: ${marginLeft ? "16px" : "0px"};
    text-transform: ${uppercase ? "uppercase" : "none"};
  `
);
