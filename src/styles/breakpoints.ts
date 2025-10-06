export const breakpoints = {
  // Mobile 0 to 699px
  mobile: 699,
  tabletMin: 700,
  tabletMax: 999,
  desktopMin: 1000,
  desktopMax: 1399,
  desktopLarge: 1400,
};

export const media = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tabletMin}px) and (max-width: ${breakpoints.tabletMax}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktopMin}px) and (max-width: ${breakpoints.desktopMax}px)`,
  desktopLarge: `@media screen and (min-width: ${breakpoints.desktopLarge}px)`,
};
