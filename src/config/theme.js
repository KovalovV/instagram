const breakpoints = {
  sm: 450,
  md: 875,
  //   lg: 62, // 992px,
  //   xl: 75, // 1200px
  //   xxl: 87.5, // 1400px
};

export const getTheme = () => ({
  breakpoints,
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint}px)`,
});
