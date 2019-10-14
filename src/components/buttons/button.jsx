/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { withColorwayProp } from '../../themes/color-variant-hocs'
import baseButton from './base'

const Styled = styled('button')`
  ${({ theme, colorway }) => baseButton(theme, colorway)}
`

const ButtonBase = ({ children, ...others }) => (
  <Styled {...others}>{children}</Styled>
)

ButtonBase.propTypes = {
  children: PropTypes.string.isRequired,
}

const Button = withColorwayProp(ButtonBase, 'neutral')

export default Button
