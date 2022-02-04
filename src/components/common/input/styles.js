import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { colors, borders } from "./config";

const editProfileStyles = css`
  border-radius: 3px;
  font-size: 16px;
  height: 32px;
  padding: 0 10px;
  width: 100%;
  cursor: text;
  padding: 0 16px;

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
  }

  &:focus {
    border: 2px solid #0095f6;
  }
`;

const searchStyles = css`
  border-radius: 8px;
  min-width: 125px;
  width: 268px;
  height: 65%;
  cursor: text;
  padding: 0 16px;

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
  }
`;

const formStyles = css`
  border: 1px solid ${colors.darkGrey};
  border-radius: 4px;
  padding: 10px 14px;
  margin-bottom: 8px;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
  }
`;

const initialStyles = css`
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
  }
`;

const inputStyles = {
  textEditProfile: editProfileStyles,
  textSearch: searchStyles,
  textRegister: formStyles,
  email: formStyles,
  password: formStyles,
  passwordVisible: formStyles,
};

const getInputStyleByType = (type) => inputStyles[type] || initialStyles;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: none;
  font-size: 14px;
  color: #262626;

  ${({ type, border, color, bgColor, disabled }) => css`
    border: ${borders[border]};
    color: ${colors[color]};
    background-color: ${colors[bgColor]};
    opacity: ${disabled ? 0.7 : 1};

    &:focus {
      border: ${borders[border]};
    }

    ${getInputStyleByType(type)}
  `}
`;

export const Wrapper = styled.div`
  ${flex.alignCenter}
  position: relative;
  width: 100%;
  height: 100%;
`;
