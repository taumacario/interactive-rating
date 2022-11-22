import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  // keyframes,
  // getCssText,
  // theme,
  // createTheme,
  // config,
} = createStitches({
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',

      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(217, 12%, 63%)',
      mediumGrey: 'hsl(216, 12%, 54%)',
      grey300: 'hsl(213, 19%, 29% )',
      grey400: 'hsl(213, 19%, 23% )',
      darkBlue: 'hsl(213, 19%, 18%)',
      veryDarkBlue: 'hsl(216, 12%, 8%)',
    },
    fontWeights: {
      bold: 700,
      regular: 400,
    },
  },
});