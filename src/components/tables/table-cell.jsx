/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'

const StyledTableCell = styled('div')`
  padding: ${({ theme }) => theme.spacing.xsmall};
  ${({ theme, head }) => head && `font-weight: ${theme.typography.fonts.bold.weight};`};
  ${({ format }) => format === 'number' ? `text-align: right;` : ``};
`

const TableCell = ({ className, children, ...others }) => (
  <StyledTableCell className={(className, 'table-cell')} {...others}>{children}</StyledTableCell>
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
