import styled from "styled-components";
import { flex } from "utils/flex";

export const StyledUserPhoto = styled.div`
  position: relative;

  img {
    width: 24px;
    height: 24px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #262626;
    cursor: pointer;
  }
`;

export const UserActionsWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  display: none;
`;

export const Diamond = styled.div`
  position: absolute;
  top: 30px;
  left: 25%;
  transform: translate(-50%, 0%);
  width: 14px;
  height: 14px;

  border: 1px solid #fff;

  background: #fff;
  box-shadow: -3px -3px 3px rgba(0, 0, 0, 0.0975);

  transform: rotate(45deg);
`;

export const UserActions = styled.div`
  position: absolute;
  top: 36px;
  left: -310%;
  transform: translate(-50%, 0%);
  background: #fff;

  width: 230px;
  height: 106px;

  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  border-radius: 6px;
`;

export const ActionWrapper = styled.div`
  ${flex.alignCenter}
  width: 100%;
  padding: 8px 16px;

  &:hover {
    background-color: #fafafa;
  }

  &:last-child {
    border-top: 1px solid #dbdbdb;
    padding-bottom: 12px;
    cursor: pointer;
  }

  svg {
    margin-right: 12px;
  }

  span {
    color: #262626;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  a {
    height: 100%;
    width: 100%;
  }
`;
