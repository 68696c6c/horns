/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'

import StyledTableRow from './table-row'

const StyledTableHead = styled(StyledTableRow)`
  .table-cell {
    font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
    text-transform: uppercase;
  }
`

const TableHead = ({ className, children, ...others }) => (
  <StyledTableHead className={(className, 'table-head')} {...others}>{children}</StyledTableHead>
)

export default TableHead
