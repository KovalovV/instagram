import { StyledTextarea } from "./styles";

const Textarea = ({
  id,
  type,
  size,
  border,
  color,
  bgColor,
  placeholder,
  value,
  onChange,
}) => (
  <StyledTextarea
    id={id}
    type={type}
    size={size}
    border={border}
    color={color}
    bgColor={bgColor}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Textarea;
