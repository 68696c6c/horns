import styled, { cx } from 'react-emotion'
import { rgb } from '../../themes/utils'
import React from 'react'

const StyledTableHead = styled('div')`
  border-top: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  border-bottom: 2px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  .table-cell {
    font-weight: ${({ theme }) => theme.typography.fonts.default.weight};
    text-transform: uppercase;
  }
`

const TableHead = ({ className, children, ...others }) => (
  <StyledTableHead className={cx(className, 'table-head')} {...others}>{children}</StyledTableHead>
)

export default TableHead
