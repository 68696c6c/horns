import { css } from 'emotion'
import { rgb } from '../../../themes/utils'

export const baseHeading = (size, margin, theme, variant) => {
  let color
  if (variant === 'copy-dark') {
    color = rgb(theme.colors.copy.dark)
  } else if (variant === 'copy-light') {
    color = rgb(theme.colors.copy.light)
  }  else if (variant === 'inherit') {
    color = 'inherit'
  } else {
    color = rgb(theme.colors[variant].default)
  }
  return css`
    font-size: ${size};
    margin: ${margin};
    color: ${color};
  `
}
