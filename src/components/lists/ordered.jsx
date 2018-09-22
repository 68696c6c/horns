import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { COUNTER, renderItems, TYPES_ORDERED } from './base'

const Styled = styled('ol')`
  ${baseList()};
  counter-reset: ${COUNTER};
  > li {
    padding-left: 1.5rem;
    &::before {
      counter-increment: ${COUNTER};
      min-width: 1.5rem;
      margin-left: -1.5rem;
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
