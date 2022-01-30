import styled from "styled-components";
import { flex } from "utils/flex";

export const ModalWrapper = styled.div`
  ${flex.center}
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);

  z-index: 20;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
