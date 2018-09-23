import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const StyledTable = styled('div')`
  @media(min-width: ${({ breakpoint, theme }) => theme.breakpoints[breakpoint]}) {
    .table-row, .table-head {
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;
      .table-cell {
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`

const Table = ({ breakpoint, className, children, ...others }) => (
  <StyledTable breakpoint={breakpoint} className={cx(className, 'table')} {...others}>{children}</StyledTable>
)

Table.propTypes = {
  breakpoint: PropTypes.string,
}

Table.defaultProps = {
  breakpoint: 'small',
}

export default Table
