import { Icon } from "components/common/icons";

import { StyledSpinner } from "./styles";

const Spinner = ({ width, height }) => (
  <StyledSpinner>
    <Icon icon="spinner" width={width} height={height} />
  </StyledSpinner>
);

export default Spinner;
