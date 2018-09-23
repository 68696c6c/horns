import React from 'react'
import styled, { cx } from 'react-emotion'

const StyledTableCell = styled('div')`
  padding: .5em;
  line-height: 1em;
`

export const TableCell = ({ className, children, ...others }) => (
  <StyledTableCell className={cx(className, 'table-cell')} {...others}>{children}</StyledTableCell>
)

export default TableCell
