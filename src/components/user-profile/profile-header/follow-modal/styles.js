import styled from "styled-components";
import { flex } from "utils/flex";

export const FollowModalWrapper = styled.div`
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

export const StyledFollowModal = styled.div`
  width: 400px;
  max-height: 400px;

  background: white;
  position: relative;
  margin: 20px;
  border-radius: 10px;

  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;
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

export const ContentList = styled.ul`
  max-height: 359px;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const FollowUser = styled.div`
  ${flex.justifyBetween}
  align-items: center;

  button {
    margin: 15px;
    height: 30px;
  }
`;
