/* eslint-disable no-nested-ternary */
import { Icon } from "components/common/icons";
import { StyledButton } from "components/common/button/styles";
import { StyledInput, Wrapper } from "./styles";

const Input = ({
  type,
  border,
  color,
  bgColor,
  placeholder,
  onChange,
  value,
  id,
  disabled,
  onClick,
}) =>
  type === "password" || type === "passwordVisible" ? (
    <Wrapper>
      <StyledInput
        type={type}
        border={border}
        color={color}
        bgColor={bgColor}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
      />
      <StyledButton
        onClick={onClick}
        size="default"
        color="dark"
        bgColor="transparent"
        type="button"
      >
        {type === "password" ? "Show" : "Hide"}
      </StyledButton>
    </Wrapper>
  ) : type === "textSearch" ? (
    <Wrapper>
      <StyledInput
        type={type}
        border={border}
        color={color}
        bgColor={bgColor}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
      <StyledButton
        onClick={onClick}
        size="default"
        color="dark"
        bgColor="transparent"
        type="deleteButton"
      >
        <Icon icon="closeIcon" />
      </StyledButton>
    </Wrapper>
  ) : (
    <StyledInput
      type={type}
      border={border}
      color={color}
      bgColor={bgColor}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      id={id}
      disabled={disabled}
    />
  );
export default Input;
