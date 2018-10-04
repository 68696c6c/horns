import { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

export const baseNotification = (theme, variant) => {
  const bg = theme.colors[variant].default
  const color = bg.isDark() ? theme.colors.copy.light : theme.colors.copy.dark
  return css`
    background-color: ${rgb(bg)};
    color: ${rgb(color)};
  `
}
