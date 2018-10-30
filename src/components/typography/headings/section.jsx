import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h2')`
  ${({ theme, variant }) => {
  const { size, margin } = theme.typography.headings.h2
  return baseHeading(size, margin, theme, variant)
}}
`

const HeadingSection = ({ children, ...others }) => <Styled {...others}>{children}</Styled>

HeadingSection.propTypes = {
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

HeadingSection.defaultProps = {
  variant: 'copy',
}

export default HeadingSection
