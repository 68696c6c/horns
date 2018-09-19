import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

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

const StyledLink = styled('a')`
  ${({ variant, theme }) => baseLink(theme.links[variant])}
`

StyledLink.defaultProps = {
  variant: 'default',
}

export default StyledLink
