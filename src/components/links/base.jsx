import styled from '@emotion/styled'
import { css } from '@emotion/core'
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

export const StyledLinkButton = styled('a')`
  ${({ theme, variant }) => baseButton(theme, variant)};
`

const StyledLink = styled('a')`
  ${({ variant, theme }) => baseLink(theme.links[variant])}
`

export default StyledLink
