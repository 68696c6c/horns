import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'react-emotion'

const TableRow = ({ indent, className, children, ...others }) => (
  <div className={cx(className, 'table-row', indent ? 'indent' : '')} {...others}>{children}</div>
)

TableRow.propTypes = {
  indent: PropTypes.bool,
}

TableRow.defaultProps = {
  indent: false,
}

export default TableRow
