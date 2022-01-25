import styled, { css } from "styled-components";

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

export const SignMain = styled.main(
  ({ theme: { up, breakpoints } }) => css`
    max-width: 350px;

    ${up(breakpoints.sm)} {
      margin-top: 35px;
    }
  `
);
