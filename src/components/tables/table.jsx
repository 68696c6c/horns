/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { rgb } from '../../themes/utils'

const rowStyle = (extra = '') => {
  return css`
    .table-row, .table-head {
      display: table-row;
      ${extra};
      &.indent .table-cell:first-child {
        text-indent: 1em;
        > * {
          text-indent: 0;
          margin-left: 1em;
        }
      }
    }
  `
}
const styleStack = breakpoint => {
  const extra = css`
    .table-cell {
      display: table-cell;
    }
  `
  return css`
    .table-row, .table-head {
      &.indent .table-cell {
        text-indent: 1em;
        > * {
          text-indent: 0;
          margin-left: 1em;
          display: block;
        }
      }
    }
    @media(min-width: ${breakpoint}) {
      ${rowStyle(extra)};
    }
  `
}
const styleScroll = minWidth => {
  const extra = css`
    .table-cell {
      display: table-cell;
    }
  `
  return css`
    min-width: ${minWidth};
    ${rowStyle(extra)};
  `
}

const StyledTable = styled('div')`
  background: ${({ theme }) => rgb(theme.colors.background.light)};
  display: table;
  width: 100%;
  ${({ breakpoint, responsive, minWidth, theme }) => responsive === 'scroll' ? styleScroll(theme.breakpoints[minWidth]) : styleStack(theme.breakpoints[breakpoint])};
  .table-head .table-cell {
    color: ${({ variant, theme }) => theme.colors.background.light.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)};
    border-top: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
    border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
    .sort {
      svg {
        fill: ${({ theme }) => rgb(theme.colors.copy.alpha)}; 
      }
      &.active {
        svg {
          fill: ${({ variant, theme }) => theme.colors.background.light.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)}; 
        }
      }
    }
  }
  .table-row {
    color: ${({ variant, theme }) => theme.colors.background.light.isDark() ? rgb(theme.colors.copy.light) : rgb(theme.colors.copy.dark)};
    &:nth-child(even) .table-cell {
    }
    &:nth-child(odd) .table-cell {
      background: ${({ variant, theme }) => rgb(theme.colors[variant].alpha)};
    }
    &:not(:last-of-type) .table-cell {
      border-bottom: 1px solid ${({ variant, theme }) => rgb(theme.colors[variant].light)};
    }
    &:last-child .table-cell {
      border-bottom: 4px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
    }
  }
`
const StyledTabledContainer = styled('div')`
  overflow-x: scroll;
`

const Table = ({ breakpoint, responsive, minWidth, variant, className, children, ...others }) => {
  const table = (
    <StyledTable
      breakpoint={breakpoint}
      responsive={responsive}
      minWidth={minWidth}
      variant={variant}
      className={(className, 'table')}
      {...others}
    >
      {children}
    </StyledTable>
  )
  return responsive === 'scroll' ? <StyledTabledContainer>{table}</StyledTabledContainer> : table
}

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
