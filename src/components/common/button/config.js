const sizes = {
  default: { width: "auto", height: "auto" },
  full: { width: "100%", height: "auto" },
  small: { width: "110px", height: "30px" },
  medium: { width: "144px" },
  large: { width: "195px" },
};

const colors = {
  dark: { active: "#262626", disabled: "#ffffff" },
  black: { active: "#262626", disabled: "#95d5fc" },
  grey: { active: "#8e8e8e", disabled: "#95d5fc" },
  blue: { active: "#0095f6", disabled: "#95d5fc" },
  white: { active: "#ffffff", disabled: "#ffffff" },
  green: { active: "#5eba7d", disabled: "#94d0a8" },
  transparent: { active: "transparent", disabled: "transparent" },
};

const borders = {
  none: "none",
  dark: "1px solid #a8a8a8",
  grey: "1px solid #dbdbdb",
  blue: "1px solid #0095f6",
};

export { sizes, colors, borders };
