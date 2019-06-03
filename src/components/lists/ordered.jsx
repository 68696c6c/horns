import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { COUNTER, renderItems, TYPES_ORDERED } from './base'

// @TODO the fixed left padding will not work with counters greater than 2 digits, need a solution that accounts for the actual width of the list counter.
const Styled = styled('ol')`
  ${({ theme }) => baseList(theme)};
  counter-reset: ${COUNTER};
  > li {
    padding-left: ${({ theme }) => theme.spacing.medium};
    &::before {
      counter-increment: ${COUNTER};
      min-width: ${({ theme }) => theme.spacing.medium};
      margin-left: -${({ theme }) => theme.spacing.medium};
      text-align: right;
    }  
  }
`

const ListOrdered = ({ type, variant, className, children, ...others }) => (
  <Styled variant={variant} className={className} {...others}>{renderItems(children, variant, type)}</Styled>
)

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
