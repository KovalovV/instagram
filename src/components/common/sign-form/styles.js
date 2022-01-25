import styled from "styled-components";
import { flex } from "utils/flex";
import { StyledButton } from "components/common/button/styles";
import { Card } from "pages/sign-in/styles";

export const SignForm = styled(Card)`
  padding: 15px 45px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: auto;
    padding: 20px 50px;
    padding-bottom: 30px;
  }

  input {
    width: 100%;
  }
`;

export const SignButton = styled(StyledButton)`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 9px;
  margin-top: 8px;
  margin-bottom: 8px;

  &:disabled {
    background-color: rgba(0, 149, 246, 0.3);
  }
`;

export const Or = styled.div`
  ${flex.justifyBetween}
  ${flex.alignCenter}
  margin: 18px 0px 28px;
  font-size: 13px;
  color: #8e8e8e;
  text-transform: uppercase;

  .line {
    width: 37%;
    height: 1px;
    background-color: #dbdbdb;
  }
`;

export const ForgotPassword = styled.div`
  a {
    ${flex.center}
    width: 100%;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: #00376b;
    line-height: 16px;
    text-decoration: none;
    margin-top: 12px;
  }
`;
