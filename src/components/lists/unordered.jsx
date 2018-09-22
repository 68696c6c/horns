import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { TYPES_UNORDERED } from './base'

const Styled = styled('ul')`
  ${({ counter, itemWidth, variant, theme }) => baseList(counter, itemWidth, theme.colors[variant].default)};
`

const typeSymbolMap = {
  disc: '●',
  circle: '○',
  none: '',
  square: '■',
  icon: '',
}

const ListUnordered = ({ type, variant, className, children, ...others }) => {
  const content = `'${typeSymbolMap[type]}'`
  const width = '1rem'
  return (
    <Styled counter={content} itemWidth={width} variant={variant} className={className} {...others}>{children}</Styled>
  )
}

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
