import styled from "styled-components";
import { flex } from "utils/flex";

export const LoaderScreenContainer = styled.div`
  position: relative;

  ${flex.center}
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10000;
`;
