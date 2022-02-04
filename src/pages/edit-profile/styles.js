import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const Card = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    width: 100%;
    background-color: #fff;

    ${up(breakpoints.sm)} {
      border: 1px solid #dbdbdb;
    }
  `
);

export const Flex = styled.div(
  ({ theme: { down } }) => css`
    display: flex;
    width: 100%;
    max-width: 555px;

    ${down(735)} {
      flex-direction: column;
    }
  `
);

export const MainContainer = styled(Card)(
  ({ theme: { up, breakpoints } }) => css`
    max-width: 975px;
    margin: 0 auto;
    margin-top: 59px;

    ${up(breakpoints.sm)} {
      margin-top: 100px;
    }
  `
);

export const EditForm = styled.form`
  padding: 20px;
`;

export const Image = styled.div(
  ({ theme: { up } }) => css`
    ${flex.alignCenter}
    width: 100%;
    height: 60px;
    padding: 15px;

    img {
      width: 38px;
      height: 38px;
      margin-right: 20px;
    }

    h1 {
      color: #262626;
      font-size: 20px;
      line-height: 22px;
      margin-top: -10px;
      margin-bottom: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      color: #0095f6;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    ${up(735)} {
      img {
        margin: 2px 32px 0 65px;
      }
    }
  `
);

export const PropLabel = styled.label(
  ({ theme: { up } }) => css`
    color: #262626;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    margin-top: 6px;
    flex-basis: 25px;
    padding: 0 20px;

    ${up(735)} {
      flex: 0 0 150px;
      padding-left: 32px;
      padding-right: 32px;
      text-align: right;
    }
  `
);

export const InputDesc = styled.div`
  width: 100%;
  margin-bottom: 25px;

  p {
    font-size: 12px;
    line-height: 16px;
    margin: -2px 0 -3px;
    color: #8e8e8e;
    font-weight: 400;
    margin-top: 10px;
  }
`;
