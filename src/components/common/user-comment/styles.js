import styled, { css } from "styled-components";

export const DescriptionHeader = styled.div(
  ({ withAvatar }) => css`
    display: flex;
    margin-bottom: 10px;

    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 14px;
    }

    span {
      line-height: 20px;
    }

    .login {
      color: #262626;
      font-weight: 600;
      font-size: 16px;

      margin-top: -5px;
      margin-right: 5px;
      display: inline-flex;
    }

    .description-container {
      padding: ${withAvatar ? "0px" : "0px 16px"};
    }

    .publacation-date {
      color: #8e8e8e;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      margin: 15px 0px;
    }
  `
);
