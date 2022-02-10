import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  z-index: 10;
`;

export const NavContainer = styled.div`
  ${flex.alignCenter}
  ${flex.justifyBetween}
  max-width: 975px;
  height: 100%;

  padding: 0px 20px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 17%;
  margin-right: 20px;

  img {
    width: 103px;
    height: auto;
    margin-top: 7px;
  }
`;

export const IconNavigateWrapper = styled.div`
  display: flex;
  padding-left: 24px;
`;

export const IconNavigate = styled.div(
  ({ theme: { up } }) => css`
    margin-right: 14px;

    a svg {
      outline: none;
    }

    ${up(735)} {
      margin-right: 24px;
    }
  `
);

export const UserPhoto = styled.div`
  img {
    width: 24px;
    height: 24px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #262626;

    /* ${({ avatar }) => css`
      background: url(${avatar}) no-repeat center top fixed;
      background-size: 100% 100%;
    `} */
  }
`;
