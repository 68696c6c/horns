/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { toClassNames } from '../utils'

import StyledTableRow from './table-row'

const StyledTableHead = styled(StyledTableRow)`
  .table-cell {
    font-weight: ${({ theme }) => theme.typography.fonts.bold.weight};
    text-transform: uppercase;
  }
`

const TableHead = ({ className, children, ...others }) => (
  <StyledTableHead className={toClassNames(className, 'table-head')} {...others}>{children}</StyledTableHead>
)

export default TableHead
