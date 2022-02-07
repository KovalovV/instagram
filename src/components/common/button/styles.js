import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { sizes, colors, borders } from "./config";

const submitEditStyles = css`
  padding: 5px 9px;
  border-radius: 5px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;

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
  submitEdit: submitEditStyles,
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

  ${({ size, color, bgColor, border, type, disabled }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    color: ${disabled ? colors[color].disabled : colors[color].active};
    background-color: ${disabled
      ? colors[bgColor].disabled
      : colors[bgColor].active};
    border: ${borders[border]};

    ${getButtonStyleByType(type)}
  `}
`;
