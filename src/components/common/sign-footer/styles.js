import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const Card = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    width: 100%;

    ${up(breakpoints.sm)} {
      padding: 20px 0px;
      background-color: #fff;
      border: 1px solid #dbdbdb;
    }
  `
);

export const SignUpInCard = styled(Card)`
  text-align: center;

  p {
    font-size: 14px;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: #0095f6;
    text-decoration: none;
  }
`;

export const GetApp = styled.div`
  width: 100%;
  padding: 20px 0px;
  text-align: center;

  p {
    margin: 10px 20px;
    font-size: 14px;
  }

  a {
    margin: 10px 5px;
    flex-basis: 40%;
  }

  img {
    width: 100%;
  }

  .install-store {
    ${flex.justifyCenter}
    margin: 5px 0;
  }
`;
