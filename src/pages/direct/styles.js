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

export const Center = styled.div`
  ${flex.center}
  flex-direction: column;
  width: 100%;
  height: 100%;

  h3 {
    color: #262626;
    font-size: 22px;
    line-height: 26px;
    font-weight: 300;
    margin-top: 16px;
  }

  p {
    color: #8e8e8e;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    margin-top: 16px;
  }
`;

export const Flex = styled.div(
  ({ theme: { down } }) => css`
    display: flex;
    width: 100%;

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
    margin-bottom: 50px;
    overflow: hidden;

    ${up(breakpoints.sm)} {
      margin-top: 100px;
    }
  `
);

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-right: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: rgb(38, 38, 38);
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 75vh;
  overflow-y: scroll;
  padding: 8px 0;
`;
