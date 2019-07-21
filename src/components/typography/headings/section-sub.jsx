/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import baseHeading from './base'

const Styled = styled('h3')`
  ${({ theme, variant }) => {
    const { size, margin } = theme.typography.headings.h3
    return baseHeading(size, margin, theme, variant)
  }}
`

const HeadingSectionSub = ({ children, ...others }) => <Styled {...others}>{children}</Styled>

HeadingSectionSub.propTypes = {
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

HeadingSectionSub.defaultProps = {
  variant: 'inherit',
}

export default HeadingSectionSub
