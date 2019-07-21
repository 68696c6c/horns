/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import baseHeading from './base'

const Styled = styled('h1')`
  ${({ theme, variant }) => {
    const { size, margin } = theme.typography.headings.h1
    return baseHeading(size, margin, theme, variant)
  }}
`

const HeadingHero = ({ children, ...others }) => <Styled {...others}>{children}</Styled>

HeadingHero.propTypes = {
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

HeadingHero.defaultProps = {
  variant: 'inherit',
}

export default HeadingHero
