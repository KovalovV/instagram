import { formatDate } from "utils/date";

import { StyledDate } from "./styles";

const Date = ({ uppercase, marginLeft, date }) => (
  <StyledDate uppercase={uppercase} marginLeft={marginLeft}>
    {date && formatDate(date.seconds * 1000)}
  </StyledDate>
);

export default Date;
