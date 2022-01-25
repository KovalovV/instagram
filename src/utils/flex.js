import { css } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const alignCenter = css`
  display: flex;
  align-items: center;
`;

const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

const justifyBetween = css`
  display: flex;
  justify-content: space-between;
`;

const flex = { alignCenter, center, justifyCenter, justifyBetween };

export { flex };
