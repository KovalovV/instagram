import { Icon } from "components/common/icons";

import { StyledEmptyModal, UserSuggestionsContainer } from "./styles";

const EmptyModal = ({ contentLength, type, children }) =>
  !contentLength ? (
    <>
      <StyledEmptyModal>
        <Icon icon="peopleIcon" width="96px" height="96px" />
        <h2>
          People {type === "followers" ? "are following you " : "you follow"}
        </h2>
        <p>
          Once{" "}
          {type === "followers" ? "people follow you " : "you follow people"},
          you&apos;ll see them here.
        </p>
      </StyledEmptyModal>
      <UserSuggestionsContainer>{children}</UserSuggestionsContainer>
    </>
  ) : (
    <span />
  );

export default EmptyModal;
