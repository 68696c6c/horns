import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h3')`
${({ theme }) => {
  const { size, margin } = theme.typography.headings.h3
  return baseHeading(size, margin, theme)
}}
`

const HeadingSectionSub = ({ variant, className, children, ...others }) => {
  return <Styled className={cx(className, 'heading', 'heading-section-sub', variant)} {...others}>{children}</Styled>
}

HeadingSectionSub.propTypes = {
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
  ]),
}

HeadingSectionSub.defaultProps = {
  variant: '',
}

export default HeadingSectionSub
