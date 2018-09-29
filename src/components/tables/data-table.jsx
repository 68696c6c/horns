import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import Table from './table'
import { GroupInline, Input, Select } from '../forms'
import Pagination from '../nav/pagination'

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
  padding: .5em 0;
`

const StyledDataTableFooter = styled('footer')`
  padding: .5em 0;
`

class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      per_page: 10,
      pages: 10,
    }
  }

  render() {
    const { className, children, ...others } = this.props
    const start = (this.state.page - 1) * this.state.per_page + 1
    const end = start + this.state.per_page - 1
    const entries = this.state.pages * this.state.per_page
    return (
      <StyledDataTable className={cx(className, 'data-table')} {...others}>
        <StyledDataTableHeader>
          <GroupInline>
            <Select label="Items per page" name="per_page" value={this.state.per_page} className={css`width: 40px;`}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
            <Input label="Search" name="term"/>
          </GroupInline>
        </StyledDataTableHeader>
        <Table className="data-table-table">{children}</Table>
        <StyledDataTableFooter>
          <GroupInline>
            <span>Showing {start} through {end} of {entries} entries</span>
            <Pagination pages={this.state.pages} page={this.state.page}/>
          </GroupInline>
        </StyledDataTableFooter>
      </StyledDataTable>
    )
  }
}

DataTable.propTypes = {
  source: PropTypes.string,
}

DataTable.defaultProps = {}

export default DataTable
