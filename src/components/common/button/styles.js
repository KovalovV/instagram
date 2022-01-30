import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { sizes, colors } from "./config";

const followProfileStyles = css`
  padding: 5px 9px;
  border-radius: 5px;
`;

const editProfileStyles = css`
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
`;

const inputButtonStyles = css`
  position: absolute;
  height: 85%;
  top: 0;
  right: 0;
  margin-right: 10px;
`;

const inputDeleteTextStyles = css`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  margin-right: 10px;
`;

const initialStyles = css`
  position: relative;
`;

const buttonStyles = {
  button: inputButtonStyles,
  deleteButton: inputDeleteTextStyles,
  editProfile: editProfileStyles,
  followProfile: followProfileStyles,
};

const getButtonStyleByType = (type) => buttonStyles[type] || initialStyles;

export const StyledButton = styled.button`
  ${flex.center}
  background-color: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  ${({ size, color, bgColor, type }) => css`
    width: ${sizes[size].width};
    color: ${colors[color]};
    background-color: ${colors[bgColor]};

    ${getButtonStyleByType(type)}
  `}
`;
