import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '../../styles/theme'
import { css, cx } from 'react-emotion'

export const TableRow = ({ className, children, ...others }) => {
  const style = css``
  return (
    <div className={cx('table-row', className, style)} {...others}>
      {children}
    </div>
  )
}

export const TableHead = ({ className, children, ...others }) => {
  const style = css``
  return (
    <div className={cx('table-head', className, style)} {...others}>
      {children}
    </div>
  )
}

export const TableCell = ({ className, children, ...others }) => {
  const style = css``
  return (
    <div className={cx('table-cell', className, style)} {...others}>
      {children}
    </div>
  )
}

export const Table = ({ breakpoint, className, children, ...others }) => {
  const minWidth = breakpoints[breakpoint]
  const style = css`
    @media(min-width: ${minWidth}) {
      .table-row, .table-head {
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        .table-cell {
          flex-grow: 1;
          flex-basis: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  `
  return (
    <div className={cx('table', className, style)} {...others}>
      {children}
    </div>
  )
}

Table.propTypes = {
  breakpoint: PropTypes.string,
}

Table.defaultProps = {
  breakpoint: 'small',
}

export default Table
