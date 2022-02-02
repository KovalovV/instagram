import styled from "styled-components";
import { flex } from "utils/flex";

export const Modal = styled.div`
  width: 348px;
  height: 391px;
  background-color: #fff;
  color: #262626;
  border-radius: 10px;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  form {
    width: 100%;
    height: 348px;
  }
`;

export const Center = styled.div`
  ${flex.center}
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 41px;
  border-bottom: 1px solid rgba(219, 219, 219, 1);

  .corner {
    ${flex.center}
    flex: 0 0 65px;
    padding: 12px;
  }

  h1 {
    ${flex.center}
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ImageContainer = styled.div`
  width: 348px;
  height: 348px;

  div {
    height: auto;
    width: 100%;
  }

  div div img {
    overflow: scroll;
    border-radius: 5px;
    height: auto;
    width: 100%;
  }
`;

export const SelectPhoto = styled.div`
  padding: 25px;

  p,
  input {
    margin-top: 20px;
  }

  p {
    color: #262626;
    font-size: 22px;
    line-height: 26px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .select {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    background-color: #0095f6;
  }
`;
