import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 935px;
  margin: 32px auto 0;
  padding-bottom: 32px;
  width: 100%;
`;

export const SignArticle = styled.article(
  ({ theme: { up, breakpoints } }) => css`
    display: none;
    flex-basis: 404px;
    align-self: center;

    img {
      width: 100%;
      height: auto;
    }

    ${up(breakpoints.md)} {
      display: block;
    }
  `
);

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

export const SignMain = styled.main(
  ({ theme: { up, breakpoints } }) => css`
    max-width: 350px;

    ${up(breakpoints.sm)} {
      margin-top: 35px;
    }
  `
);

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
