import styled, { css } from "styled-components";
import { colors, borders, sizes } from "./config";

const textareaCommentStyles = css`
  margin-right: 40px;
  color: #262626;
  position: relative;
`;

const textareaDescriptionStyles = css`
  color: #262626;
  position: relative;
`;

const initialStyles = css`
  color: #262626;
`;

const textareaStyles = {
  description: textareaDescriptionStyles,
  comment: textareaCommentStyles,
};

const getTextareaStyleByType = (type) => textareaStyles[type] || initialStyles;

export const StyledTextarea = styled.textarea`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  background: 0 0;
  border: 0;
  overflow: auto;
  padding: 0 16px;
  scrollbar-width: none;
  resize: none;
  cursor: text;

  ${({ size, border, bgColor, type }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    border: ${borders[border]};
    background-color: ${colors[bgColor]};

    ${getTextareaStyleByType(type)}
  `}
`;
