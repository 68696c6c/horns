import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h4')`
${({ theme }) => {
  const { size, margin } = theme.typography.headings.h4
  return baseHeading(size, margin, theme)
}}
`

const HeadingCopy = ({ variant, className, children }) => {
  return <Styled className={cx(className, 'heading', 'heading-copy', variant)}>{children}</Styled>
}

HeadingCopy.propTypes = {
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
  ]),
}

HeadingCopy.defaultProps = {
  variant: '',
}

export default HeadingCopy
