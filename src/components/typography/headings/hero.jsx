import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { baseHeading } from './base'

const Styled = styled('h1')`
${({ theme }) => {
  const { size, margin } = theme.typography.headings.h1
  return baseHeading(size, margin, theme)
}}
`

const HeadingHero = ({ variant, className, children, ...others }) => {
  return <Styled className={cx(className, 'heading', 'heading-hero', variant)} {...others}>{children}</Styled>
}

HeadingHero.propTypes = {
  variant: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'tertiary',
  ]),
}

HeadingHero.defaultProps = {
  variant: '',
}

export default HeadingHero
