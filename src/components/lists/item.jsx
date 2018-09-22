import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../../themes/utils'
import { COUNTER, TYPES_ORDERED, TYPES_UNORDERED } from './base'

const Styled = styled('li')`
  padding-left: ${({ itemWidth }) => itemWidth};
  &::before {
    content: ${({ symbolContent }) => symbolContent};
    counter-increment: ${COUNTER};
    display: inline-block;
    width: ${({ itemWidth }) => itemWidth};
    margin-left: -${({ itemWidth }) => itemWidth};
    color: ${({ variant, theme }) => rgb(theme.colors[variant].default)};
    text-align: right;
    margin-right: .5rem;
  }
`

const typeSymbolMap = {
  disc: '●',
  circle: '○',
  none: '',
  square: '■',
  icon: '',
}

const ListItem = ({ type, variant, width, className, children, ...others }) => {
  const content = TYPES_UNORDERED.indexOf(type) > -1 ? `'${typeSymbolMap[type]}'` : type
  return (
    <Styled symbolContent={content} itemWidth={width} variant={variant} className={className} {...others}>
      {children}
    </Styled>
  )
}

ListItem.propTypes = {
  type: PropTypes.oneOf([
    ...TYPES_ORDERED,
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
  width: PropTypes.string,
  icon: PropTypes.element,
}

ListItem.defaultProps = {
  variant: 'copy',
  width: '1rem',
}

export default ListItem
