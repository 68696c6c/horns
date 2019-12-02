import { css } from '@emotion/core'

import { valueToInt } from '../utils'

export const modeCSS = theme => {
  return css`
    background: ${theme.colors.background.primary};
    color: ${theme.colors.copy.base};
  `
}

export const getBaseStyles = theme => {
  const min = theme.typography.getSize('min')
  const minVal = valueToInt(min)
  return css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      font-family: ${theme.typography.families.base};
      margin: 0;
      padding: 0;
      min-width: ${theme.grid.breakpoints.min};
      ${modeCSS(theme)};
      font-size: ${min};
      @media (min-width: ${theme.grid.getBreakpoint('small')}) {
        font-size: ${minVal * 1.083}px;
      }
      @media (min-width: ${theme.grid.getBreakpoint('medium')}) {
        font-size: ${minVal * 1.167}px;
      }
      @media (min-width: ${theme.grid.getBreakpoint('large')}) {
        font-size: ${minVal * 1.25}px;
      }
      @media (min-width: ${theme.grid.getBreakpoint('max')}) {
        font-size: ${theme.typography.getSize('max')};
      }
      #___gatsby {
        ${modeCSS(theme)};
      }
    }
  `
}
