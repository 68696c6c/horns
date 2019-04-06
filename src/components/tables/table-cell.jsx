import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const StyledTableCell = styled('div')`
  padding: .5em;
  line-height: 1em;
  ${({ theme, head }) => head && `font-weight: ${theme.typography.fonts.bold.weight};`};
  ${({ format }) => format === 'number' ? `text-align: right;` : ``};
`

const TableCell = ({ className, children, ...others }) => (
  <StyledTableCell className={cx(className, 'table-cell')} {...others}>{children}</StyledTableCell>
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
