// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    ${({ theme }) => `
      --bg: ${theme['bg']} ;
      --fg: ${theme['fg']} ;
      --accents-1: ${theme['accents-1']} ;
      --accents-2: ${theme['accents-2']} ;
      --accents-3: ${theme['accents-3']} ;
      --accents-4: ${theme['accents-4']} ;
      --geist-foreground: ${theme['geist-foreground']} ;
      --geist-success: ${theme['geist-success']} ;
      --link-color: ${theme['link-color']} ;
    `}
  }

  ${({ theme }) => theme.overrides};

  header {
  	overflow: hidden;
  }
`;
