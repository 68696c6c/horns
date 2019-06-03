import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { renderItems, TYPES_UNORDERED } from './base'

const Styled = styled('ul')`
  ${({ theme }) => baseList(theme)};
`

const ListUnordered = ({ type, variant, className, children, ...others }) => (
  <Styled className={className} {...others}>{renderItems(children, variant, type)}</Styled>
)

ListUnordered.propTypes = {
  type: PropTypes.oneOf([
    ...TYPES_UNORDERED,
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

ListUnordered.defaultProps = {
  type: 'disc',
  variant: 'copy',
}

export default ListUnordered
