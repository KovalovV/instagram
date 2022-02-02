import { StyledDate } from "./styles";

const Date = ({ uppercase, marginLeft, children }) => (
  <StyledDate uppercase={uppercase} marginLeft={marginLeft}>
    {children}
  </StyledDate>
);

export default Date;
