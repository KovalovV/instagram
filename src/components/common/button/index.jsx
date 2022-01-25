import { StyledButton } from "./styles";

const Button = ({ type, size, color, bgColor, disabled, children }) => (
  <StyledButton
    type={type}
    size={size}
    color={color}
    bgColor={bgColor}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default Button;
