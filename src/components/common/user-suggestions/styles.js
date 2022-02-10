import styled, { css } from "styled-components";

export const SuggestionsContainer = styled.div`
  padding: 0px;
  margin-bottom: 12px;
`;

export const SuggestionsText = styled.p(
  ({ type }) => css`
    color: ${type === "grey" ? "#8e8e8e" : "#262626"};
    font-weight: 600;
    font-size: ${type === "grey" ? "14px" : "16px"};
    line-height: 18px;
    padding: 4px 0px;
  `
);
