import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

export const baseHeading = (size, margin, theme, variant) => {
  let color
  if (variant === 'copy-dark') {
    color = theme.colors.copy.dark
  } else if (variant === 'copy-light') {
    color = theme.colors.copy.light
  } else {
    color = theme.colors[variant].default
  }
  return css`
    font-size: ${size};
    margin: ${margin};
    color: ${rgb(color)};
  `
}
