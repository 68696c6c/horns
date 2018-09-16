import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import { rgb } from '../../themes/utils'

const baseButton = (variant, weight) => {
  return css`
    display: inline-block;
    padding: .6em 2em;
    font-weight: ${weight};
    text-align: center;
    cursor: pointer;
    background: ${rgb(variant.background)};
    color: ${rgb(variant.color)};
    border-radius: ${variant.radius};
    border: ${variant.border};
    &:hover {
      background: ${rgb(variant.hover.background)};
      color: ${rgb(variant.hover.color)};
      border: ${variant.hover.border};
    }
    &:active {
      background: ${ rgb(variant.hover.background)};
      color: ${ rgb(variant.hover.color)};
      border: ${variant.hover.border};
    }
  `
}

const Styled = styled('button')`
  ${props => baseButton(props.theme.buttons[props.variant], props.theme.config.fontWeights.bold)}
`

const Button = ({ variant, className, children, ...others }) => {
  return <Styled variant={variant} className={cx(className, 'button')} {...others}>{children}</Styled>
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  variant: 'neutral',
}

export default Button
