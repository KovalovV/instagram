import styled from "styled-components";
import { flex } from "utils/flex";

export const MoreOptionsModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  ${flex.center}
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
`;

export const StyledMoreOptionsModal = styled.div`
  width: 400px;
  height: 144px;

  background: white;
  position: relative;
  margin: 20px;
  border-radius: 12px;

  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
`;

export const OptionalList = styled.ul`
  max-height: 359px;
  scrollbar-width: none;
`;

export const Optional = styled.li`
  ${flex.center}
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  min-height: 48px;
  padding: 4px 8px;
  user-select: none;
  font-weight: 400;

  border-top: 1px solid #dbdbdb;

  cursor: pointer;

  &:first-child {
    color: #ed4956;
    font-weight: 700;
    border-top: none;
  }
`;
