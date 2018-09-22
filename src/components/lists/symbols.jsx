import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import baseList, { renderItems } from './base'
import { rgb } from '../../themes/utils'

const Styled = styled('ul')`
  ${baseList()};
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    > svg:first-child {
      color: ${({ variant, theme }) => rgb(theme.colors[variant].default)};
      margin-right: .5em;
    }
  }
`

const ListSymbols = ({ icon, variant, className, children, ...others }) => {
  return (
    <Styled variant={variant} className={className} {...others}>
      {renderItems(children, variant, undefined, icon)}
    </Styled>
  )
}

ListSymbols.propTypes = {
  icon: PropTypes.element,
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

ListSymbols.defaultProps = {
  variant: 'copy',
}

export default ListSymbols
