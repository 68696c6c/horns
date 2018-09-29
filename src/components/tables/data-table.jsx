import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import Table from './table'

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

const StyledDataTable = styled('div')`
  
`

const StyledDataTableHeader = styled('header')`
  
`

const StyledDataTableToolBar = styled('div')`
  
`

const StyledPagination = styled('div')`
  
`

class DataTable extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { headerContent, content, className, children, ...others } = this.props
    return (
      <StyledDataTable className={cx(className, 'data-table')} {...others}>
        <StyledDataTableHeader className="data-table-header">{headerContent}</StyledDataTableHeader>
        <StyledDataTableToolBar className="data-table-header">

        </StyledDataTableToolBar>
        <Table className="data-table-table">{children}</Table>
        <StyledPagination/>
      </StyledDataTable>
    )
  }
}

DataTable.propTypes = {
  headerContent: PropTypes.string,
  content: PropTypes.element,
  source: PropTypes.string,
}

DataTable.defaultProps = {}

export default DataTable
