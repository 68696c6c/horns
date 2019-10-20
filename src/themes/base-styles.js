/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core'
import { modeCSS } from './mode'

export const getBaseStyles = theme => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.families.base};
    margin: 0;
    padding: 0;
    ${modeCSS(theme)};
    min-width: ${theme.grid.breakpoints.min};
    #___gatsby {
      ${modeCSS(theme)};
    }
  }
`
