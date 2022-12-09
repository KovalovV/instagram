import styled from "styled-components";

export const CallNotificationsContainer = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 20px 0 0;
  padding: 12px;
  border-radius: 16px;
  background-color: #222222;

  h2 {
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Action = styled.div`
  background-color: #58c322;
  border-radius: 50%;

  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    color: #fff;
    fill: #fff;
    padding: 8px;
  }
`;
