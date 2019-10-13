/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { withVariantProp } from '../../themes/color-variant-hocs'
import baseButton from './base'

const Styled = styled('button')`
  ${({ theme, variant }) => baseButton(theme, variant)}
`

const ButtonBase = ({ children, ...others }) => (
  <Styled {...others}>{children}</Styled>
)

ButtonBase.propTypes = {
  children: PropTypes.string.isRequired,
}

const Button = withVariantProp(ButtonBase, 'neutral')

export default Button
