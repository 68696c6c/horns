/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { font, toClassNames } from '../utils'

const StyledTableCell = styled('div')`
  padding: ${({ theme }) => theme.spacing.xsmall};
  ${({ format }) => format === 'number' ? `text-align: right;` : ``};
  ${({ theme, head }) => font(theme, 'default', head ? 'bold' : 'default')};
`

const TableCell = ({ className, children, ...others }) => (
  <StyledTableCell className={toClassNames(className, 'table-cell')} {...others}>{children}</StyledTableCell>
)

TableCell.propTypes = {
  head: PropTypes.bool,
  format: PropTypes.oneOf([
    'text',
    'number',
  ]),
}

TableCell.defaultProps = {
  head: false,
  format: 'text',
}

export default TableCell
