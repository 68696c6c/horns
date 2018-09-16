import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { rgb } from '../../themes/utils'

const Styled = styled('button')`
  display: inline-block;
  padding: .6em 2em;
  font-weight: ${props => props.theme.config.fontWeights.bold};
  text-align: center;
  cursor: pointer;
  background: ${props => rgb(props.theme.buttons[props.variant].background)};
  color: ${props => rgb(props.theme.buttons[props.variant].color)};
  border-radius: ${props => props.theme.buttons[props.variant].radius};
  border: ${props => props.theme.buttons[props.variant].border};
  &:hover {
    background: ${props => rgb(props.theme.buttons[props.variant].hover.background)};
    color: ${props => rgb(props.theme.buttons[props.variant].hover.color)};
    border-radius: ${props => props.theme.buttons[props.variant].hover.radius};
    border: ${props => props.theme.buttons[props.variant].hover.border};
  }
  &:active {
    background: ${props => rgb(props.theme.buttons[props.variant].hover.background)};
    color: ${props => rgb(props.theme.buttons[props.variant].hover.color)};
    border-radius: ${props => props.theme.buttons[props.variant].hover.radius};
    border: ${props => props.theme.buttons[props.variant].hover.border};
  }
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
