import { css } from 'emotion'
import { rgb } from '../../../themes/utils'
import { font } from '../../utils'
import { ERROR_CLASS } from '../utils'

export const baseInput = theme => {
  return css`
    display: block;
    background: ${rgb(theme.colors.copy.light)};
    color: ${rgb(theme.colors.copy.dark)};
    border: 2px solid ${rgb(theme.colors.neutral.dark)};
    border-radius: ${theme.config.radius};
    margin: 0 0 ${theme.spacing.small} 0;
    padding: ${theme.spacing.xsmall};
    ${font(theme)};
    &.${ERROR_CLASS} {
      border: 2px solid ${rgb(theme.colors.danger.default)};
      &::placeholder {
        color: ${rgb(theme.colors.danger.default)};
      }
    }
    &[disabled] {
      background: ${rgb(theme.colors.neutral.light)};
      cursor: not-allowed;
    }
  `
}
