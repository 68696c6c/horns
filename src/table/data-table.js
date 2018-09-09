import React from 'react'
import PropTypes from 'prop-types'
import { Table } from './table'
import { css, cx } from 'react-emotion'

// This component is for content that slides out under/between rows in a DataTable.
export const DataTableRowData = ({ children, className, ...others }) => {
  const style = css`
    padding: 1em;
    width: 100%;
  `
  return (
    <div className={cx('row-info', className, style)} {...others}>
      {children}
    </div>
  )
}

export const DataTable = ({ headerText, content, className, children, ...others }) => {
  const style = css``
  return (
    <div className={cx('data-table', className, style)} {...others}>
      <header className={cx('data-table-header')}>
        {headerText}
      </header>
      <div className="data-table-content">
        {content}
      </div>
      <Table className="data-table-table">
        {children}
      </Table>
    </div>
  )
}

DataTable.propTypes = {
  headerText: PropTypes.string,
  content: PropTypes.object,
}

DataTable.defaultProps = {}

export default DataTable
