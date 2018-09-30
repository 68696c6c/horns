import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import uuid from 'uuid/v4'
import Table from './table'
import { GroupInline, Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { isArray, isUndefined } from '../../utils/utils'
import TableHead from './table-head'
import TableCell from './table-cell'
import TableRow from './table-row'

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
      head: [],
      body: [],
    }

    this.filterOptions = this.filterOptions.bind(this)
    this.getRows = this.getRows.bind(this)
  }

  componentDidMount() {
    this.getRows()
  }

  filterOptions() {

  }

  getRows() {
    const { children } = this.props
    let headData = []
    let bodyData = []
    if (!isUndefined(children)) {
      const childArray = isArray(children) ? children : [children]
      childArray.map((child, index) => {
        const columns = isArray(child.props.children) ? child.props.children : [child.props.children]
        if (child.type.displayName === 'TableHead') {
          columns.map(column => {
            headData.push(column.props.children)
          })
        } else {
          bodyData[index] = []
          columns.map(column => {
            bodyData[index].push(column.props.children)
          })
        }
      })
    }
    const head = headData.map(column => <TableCell key={uuid()}>{column}</TableCell>)
    const body = bodyData.map(row => {
      return (
        <TableRow key={uuid()}>
          {row.map(column => {
            return <TableCell key={uuid()}>{column}</TableCell>
          })}
        </TableRow>
      )
    })
    this.setState(() => ({ head, body }))
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
        <Table className="data-table-table">
          <TableHead>{this.state.head}</TableHead>
          {this.state.body}
        </Table>
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
  filterOptions: PropTypes.func,
}

DataTable.defaultProps = {}

export default DataTable
