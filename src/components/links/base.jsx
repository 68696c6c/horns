import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'
import baseButton from '../buttons/base'

const baseLink = variant => {
  const { hover, active } = variant
  return css`
    color: ${rgb(variant.color)};
    text-decoration: ${variant.decoration};
    &:focus { 
      outline: none; 
    }
    &:hover {
      color: ${rgb(hover.color)};
      text-decoration: ${hover.decoration};
    }
    &:active {
      color: ${rgb(active.color)};
      text-decoration: ${active.decoration};
    }
  `
}

// @TODO use link text-decoration settings.
export const StyledLinkButton = styled('a')`
  ${({ variant, theme }) => baseButton(theme.buttons[variant], theme.config.fontWeights.bold)}
`

const StyledLink = styled('a')`
  ${({ variant, theme }) => baseLink(theme.links[variant])}
`

export default StyledLink
