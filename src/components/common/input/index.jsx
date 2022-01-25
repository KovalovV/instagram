// import { SingButton } from "pages/Login/styles";
import { StyledButton } from "../button/styles";
import { StyledInput, Wrapper } from "./styles";

const Input = ({
  type,
  border,
  color,
  bgColor,
  placeholder,
  onChange,
  id,
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
  ) : (
    <StyledInput
      type={type}
      border={border}
      color={color}
      bgColor={bgColor}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
    />
  );
export default Input;
