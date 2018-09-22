import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { COUNTER, TYPES_ORDERED } from './base'

const Styled = styled('ol')`
  counter-reset: ${COUNTER};
  ${({ counter, itemWidth, variant, theme }) => baseList(counter, itemWidth, theme.colors[variant].default)};
`

const ListOrdered = ({ type, variant, className, children, ...others }) => {
  const content = `counter(${COUNTER}, ${type}) '.'`
  const width = '1.5rem'
  return (
    <Styled counter={content} itemWidth={width} variant={variant} className={className} {...others}>{children}</Styled>
  )
}

ListOrdered.propTypes = {
  type: PropTypes.oneOf([
    ...TYPES_ORDERED,
  ]),
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
    'copy',
  ]),
}

ListOrdered.defaultProps = {
  type: 'decimal',
  variant: 'copy',
}

export default ListOrdered
