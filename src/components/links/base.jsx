import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

const baseLink = (variant) => {
  return css`
    color: ${rgb(variant.color)};
    text-decoration: ${variant.decoration};
    &:focus { 
      outline: none; 
    }
    &:hover {
      color: ${rgb(variant.hover.color)};
      text-decoration: ${variant.hover.decoration};
    }
    &:active {
      color: ${rgb(variant.active.color)};
      text-decoration: ${variant.active.decoration};
    }
  `
}

const StyledLink = styled('a')`
  ${({ variant, theme }) => baseLink(theme.links[variant])}
`

StyledLink.defaultProps = {
  variant: 'default',
}

export default StyledLink
