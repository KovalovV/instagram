import styled from "styled-components";
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
