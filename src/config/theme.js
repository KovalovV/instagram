const breakpoints = {
  sm: 450,
  smd: 735,
  md: 875,
  lg: 1000,
};

export const getTheme = () => ({
  breakpoints,
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint}px)`,
});
