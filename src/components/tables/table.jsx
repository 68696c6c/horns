import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import { rgb } from '../../themes/utils'

const rowStyle = (extra = '') => {
  return css`
    .table-row, .table-head {
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;
      ${extra};
    }
  `
}

const styleStack = (breakpoint) => {
  return css`
    @media(min-width: ${breakpoint}) {
      ${rowStyle()};
    }
  `
}
const styleScroll = (minWidth) => {
  return css`
    overflow-x: scroll;
    ${rowStyle(`min-width: ${minWidth}`)};
  `
}

const StyledTable = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.background.light)};
  ${({ breakpoint, responsive, minWidth, theme }) => responsive === 'stack' ? styleStack(theme.breakpoints[breakpoint]) : styleScroll(theme.breakpoints[minWidth])};
  .table-head {
    color: ${({ variant, theme }) => theme.colors.background.light.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)};
    border-top: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
    border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  }
  .table-row {
    color: ${({ variant, theme }) => theme.colors.background.light.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)};
    &:nth-child(even) {
    }
    &:nth-child(odd) {
      background: ${({ variant, theme }) => rgb(theme.colors[variant].alpha)};
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid ${({ variant, theme }) => rgb(theme.colors[variant].light)};
    }
    &:last-child {
      border-bottom: 4px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
    }
  }
`

const Table = ({ breakpoint, responsive, minWidth, variant, className, children, ...others }) => (
  <StyledTable
    breakpoint={breakpoint}
    responsive={responsive}
    minWidth={minWidth}
    variant={variant}
    className={cx(className, 'table')} {...others}
  >
    {children}
  </StyledTable>
)

Table.propTypes = {
  breakpoint: PropTypes.oneOf([
    'min',
    'small',
    'medium',
    'large',
    'max',
  ]),
  responsive: PropTypes.oneOf([
    'stack',
    'scroll',
  ]),
  minWidth: PropTypes.oneOf([
    'min',
    'small',
    'medium',
    'large',
    'max',
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
  ]),
}

Table.defaultProps = {
  breakpoint: 'small',
  responsive: 'stack',
  minWidth: 'medium',
  variant: 'neutral',
}

export default Table
