import styled from "styled-components";
import { flex } from "utils/flex";

export const HeaderDetails = styled.div`
  ${flex.alignCenter}
  width: 100%;
  height: 60px;
  padding: 15px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 14px;
  }

  h1 {
    color: #262626;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`;
