import React from 'react'
import styled, { cx } from 'react-emotion'

const StyledTableHead = styled('div')`
  .table-cell {
    font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
    text-transform: uppercase;
  }
`

const TableHead = ({ className, children, ...others }) => (
  <StyledTableHead className={cx(className, 'table-head')} {...others}>{children}</StyledTableHead>
)

export default TableHead
