import { Link } from "react-router-dom";

import { MainContainer, NotFoundMessage } from "./styles";

// eslint-disable-next-line arrow-body-style
const NotFound = () => {
  return (
    <MainContainer>
      <NotFoundMessage>
        <h1>Sorry, this page isn&apos;t available.</h1>
        <div>
          The link you followed may be broken, or the page may have been
          removed.
          <Link to="/"> Go back to Instagram.</Link>
        </div>
      </NotFoundMessage>
    </MainContainer>
  );
};

export default NotFound;
