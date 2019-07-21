/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import baseHeading from './base'

const Styled = styled('h2')`
  ${({ theme, variant }) => {
  const { size, margin } = theme.typography.headings.h2
  return baseHeading(size, margin, theme, variant)
}}
`

const HeadingSection = ({ children, ...others }) => <Styled {...others}>{children}</Styled>

HeadingSection.propTypes = {
  variant: PropTypes.oneOf([
    'inherit',
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
  variant: 'inherit',
}

export default HeadingSection
