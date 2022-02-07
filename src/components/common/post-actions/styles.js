import styled from "styled-components";

export const PostAction = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 16px;

  svg {
    cursor: pointer;
    margin: 8px 0px;
    margin-right: 16px;
  }

  svg:last-of-type {
    margin-left: auto;
    margin-right: 0px;
  }

  svg:hover {
    color: #8e8e8e;
  }

  .publacation-date {
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 15px 0px;
    text-transform: uppercase;
  }
`;
