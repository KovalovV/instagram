import styled, { css } from "styled-components";
import { flex } from "utils/flex";
import { colors, borders } from "./config";

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

  ${({ type, border, color, bgColor }) => css`
    border: ${borders[border]};
    color: ${colors[color]};
    background-color: ${colors[bgColor]};

    ${getInputStyleByType(type)}

    &:focus {
      border: ${borders[border]};
    }
  `}
`;

export const Wrapper = styled.div`
  /* ${flex.alignCenter} */
  position: relative;
  width: 100%;
`;
