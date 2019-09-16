/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { font, typographyColor } from '../utils'

const Styled = styled('label')`
  display: block;
  margin: -${({ theme }) => theme.spacing.tiny} 0 0 0;
  ${({ theme }) => font(theme)};
  ${({ theme, variant }) => typographyColor(theme, variant)};
`

const InputMessage = ({ htmlFor, children, ...others }) => (
  <Styled htmlFor={htmlFor} {...others}>
    {children}
  </Styled>
)

InputMessage.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf([
    'copy',
    'copy-light',
    'copy-dark',
    'success',
    'info',
    'warning',
    'danger',
  ]),
}

InputMessage.defaultProps = {
  htmlFor: '',
  children: '',
  variant: 'copy',
}

export default InputMessage
