import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h4')`
  ${({ theme, variant }) => {
    const { size, margin } = theme.typography.headings.h4
    return baseHeading(size, margin, theme, variant)
  }}
`

const HeadingCopy = ({ children, ...others }) => <Styled {...others}>{children}</Styled>

HeadingCopy.propTypes = {
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
    'background',
    'copy',
    'copy-light',
    'copy-dark',
  ]),
}

HeadingCopy.defaultProps = {
  variant: 'inherit',
}

export default HeadingCopy
