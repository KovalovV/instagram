import styled, { css } from "styled-components";
import { flex } from "utils/flex";

export const HeaderDetails = styled.div(
  ({ width, height, altitude }) => css`
    ${flex.alignCenter}
    width: 100%;
    height: ${altitude || "60px"};
    padding: 15px;

    img {
      width: ${width};
      height: ${height};
      object-fit: cover;
      border-radius: 50%;
      margin-right: 14px;
    }
  `
);

export const InfoWrapper = styled.div`
  h1 {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #262626;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: -5px;
  }

  p {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #8e8e8e;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;
