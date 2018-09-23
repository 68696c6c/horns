import React from 'react'
import { cx } from 'react-emotion'

export const TableRow = ({ className, children, ...others }) => (
  <div className={cx(className, 'table-row')} {...others}>{children}</div>
)

export default TableRow
