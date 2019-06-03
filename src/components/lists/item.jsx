import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../../themes/utils'
import { COUNTER, TYPES_ORDERED, TYPES_UNORDERED } from './base'
import { isUndefined } from '../../utils/utils'

const Styled = styled('li')`
  &::before {
    content: ${({ symbolContent }) => symbolContent};
    display: inline-block;
    color: ${({ variant, theme }) => rgb(theme.colors[variant].default)};
    margin-right: ${({ theme }) => theme.spacing.xsmall};
  }
`

const typeSymbolMap = {
  disc: '●',
  circle: '○',
  none: '',
  square: '■',
  icon: '',
}

const ListItem = ({ type, variant, icon, width, className, children, ...others }) => {
  let content = ''
  if (TYPES_UNORDERED.indexOf(type) > -1) {
    content = `'${typeSymbolMap[type]}'`
  } else if (TYPES_ORDERED.indexOf(type) > -1) {
    content = `counter(${COUNTER}, ${type}) '.'`
  }
  variant = isUndefined(variant) ? 'copy' : variant
  return (
    <Styled symbolContent={content} itemWidth={width} variant={variant} className={className} {...others}>
      {icon}
      {children}
    </Styled>
  )
}

ListItem.propTypes = {
  type: PropTypes.string,
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
  icon: PropTypes.element,
  width: PropTypes.string,
}

ListItem.defaultProps = {
  width: '1rem',
}

export default ListItem
