import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  height: 64px;
  padding: 11px 0;
  background-color: #1f1f1f;
`;

export const Action = styled.div`
  background-color: #363636;
  border-radius: 50%;

  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    color: #fff;
    fill: #fff;
    padding: 5px;
  }

  &:nth-child(3) {
    background-color: #ff443d;
  }
`;
