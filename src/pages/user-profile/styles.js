import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  margin-top: 60px;
  background-color: #fafafa;
`;

export const ProfileContainer = styled.div(
  ({ theme: { down } }) => css`
    padding: 20px 20px 0;
    max-width: 975px;
    margin: 0 auto;

    ${down(735)} {
      padding: 0px;
    }
  `
);
