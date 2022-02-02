import { useState, useEffect } from "react";
import { StyledButton } from "components/common/button/styles";
import { Wrapper } from "components/common/input/styles";
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
  onClick,
}) => {
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    setIsDisable(!value.length);
  }, [value.length]);

  return type === "comment" ? (
    <Wrapper>
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
      <StyledButton
        onClick={onClick}
        size="default"
        color="blue"
        bgColor="transparent"
        type="button"
        disabled={isDisable}
      >
        Post
      </StyledButton>
    </Wrapper>
  ) : (
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
};

export default Textarea;
