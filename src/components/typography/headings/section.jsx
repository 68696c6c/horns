import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h2')`
${({ theme }) => {
  const { size, margin } = theme.typography.headings.h2
  return baseHeading(size, margin, theme)
}}
`

const HeadingSection = ({ variant, className, children }) => {
  return <Styled className={cx(className, 'heading', 'heading-section', variant)}>{children}</Styled>
}

HeadingSection.propTypes = {
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
  ]),
}

HeadingSection.defaultProps = {
  variant: '',
}

export default HeadingSection
