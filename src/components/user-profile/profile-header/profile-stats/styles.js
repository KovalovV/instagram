import styled, { css } from "styled-components";

export const StyledProfileMobileStats = styled.ul(
  ({ theme: { down } }) => css`
    display: none;
    width: 100%;
    margin-bottom: 0px;
    border-top: 1px solid #dbdbdb;
    justify-content: space-around;
    padding: 12px 0;

    span {
      display: block;
      font-size: 14px;
      color: #262626;
      font-weight: 600;
      line-height: 1.5;
    }

    ${down(735)} {
      display: flex;
    }
  `
);

export const StyledProfileStats = styled.ul(
  ({ theme: { up } }) => css`
    display: none;
    width: 70%;
    margin-bottom: 20px;
    margin-top: 15px;

    span {
      font-weight: 600;
    }

    ${up(735)} {
      display: flex;
    }
  `
);
