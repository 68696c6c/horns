/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core'

export const backgroundColorCSS = theme => css`
  background: ${theme.colors.background.primary};
  color: ${theme.colors.copy.primary};
`

export const colorwayCSS = (theme, colorway) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
  `
}
