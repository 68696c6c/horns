import React from 'react'
import styled, { cx } from 'react-emotion'
import { rgb } from '../../themes/utils'

const StyledTableRow = styled('div')`
  &:nth-child(even) {
    background: ${({ theme }) => rgb(theme.colors.background.light)};
  }
  &:nth-child(odd) {
    background: ${({ theme }) => rgb(theme.colors.neutral.light)};
  }
  &:not(:last-of-type) {
    margin-bottom: 1px;
  }
  &:last-child {
    border-bottom: 4px solid ${({ theme }) => rgb(theme.colors.neutral.dark)};
  }
`

export const TableRow = ({ className, children, ...others }) => (
  <StyledTableRow className={cx(className, 'table-row')} {...others}>{children}</StyledTableRow>
)

export default TableRow
