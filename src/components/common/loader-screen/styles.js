import styled from "styled-components";
import { flex } from "utils/flex";

export const LoaderScreenContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  ${flex.center}
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10000;
`;
