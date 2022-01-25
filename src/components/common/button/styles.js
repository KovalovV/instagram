import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { sizes, colors } from "./config";

const inputButtonStyles = css`
  position: absolute;
  height: 85%;
  top: 0;
  right: 0;
  margin-right: 10px;
`;

const initialStyles = css`
  position: static;
`;

const buttonStyles = {
  button: inputButtonStyles,
};

const getButtonStyleByType = (type) => buttonStyles[type] || initialStyles;

export const StyledButton = styled.button`
  ${flex.center}
  background-color: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  ${({ size, color, bgColor, type }) => css`
    width: ${sizes[size].width};
    color: ${colors[color]};
    background-color: ${colors[bgColor]};

    ${getButtonStyleByType(type)}
  `}
`;
