import { StyledButton } from "./styles";

const Button = ({
  type,
  size,
  color,
  bgColor,
  border,
  disabled,
  onClick,
  children,
}) => (
  <StyledButton
    type={type}
    size={size}
    color={color}
    bgColor={bgColor}
    border={border}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
