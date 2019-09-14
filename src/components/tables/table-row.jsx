/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { toClassNames } from '../utils'

const TableRow = ({ indent, className, children, ...others }) => (
  <div className={toClassNames(className, 'table-row', indent ? 'indent' : '')} {...others}>{children}</div>
)

TableRow.propTypes = {
  indent: PropTypes.bool,
}

TableRow.defaultProps = {
  indent: false,
}

export default TableRow
