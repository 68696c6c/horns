/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { font, toClassNames } from '../utils'

import StyledTableRow from './table-row'

const StyledTableHead = styled(StyledTableRow)`
  .table-cell {
    text-transform: uppercase;
    ${({ theme }) => font(theme, 'default', 'bold')};
  }
`

const TableHead = ({ className, children, ...others }) => (
  <StyledTableHead className={toClassNames(className, 'table-head')} {...others}>{children}</StyledTableHead>
)

export default TableHead
