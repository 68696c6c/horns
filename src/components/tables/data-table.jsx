import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import uuid from 'uuid/v4'
import Table from './table'
import { GroupInline, Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { debounce, isArray, isUndefined } from '../../utils/utils'
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

// @TODO add support for sorting by columns
// @TODO add better theming and variants
class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perPage: 10,
      pages: 0,
      head: [],
      body: [],
      rows: [],
      term: '',
    }

    this.filterRows = this.filterRows.bind(this)
    this.handlePageSize = this.handlePageSize.bind(this)
    this.handlePaginate = this.handlePaginate.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.getRows = this.getRows.bind(this)
    this.getRowHTMLData = this.getRowHTMLData.bind(this)
    this.getAsyncRowData = this.getAsyncRowData.bind(this)
    this.getPageRows = this.getPageRows.bind(this)

    this.filterRef = React.createRef()
    this.perPageRef = React.createRef()
  }

  componentWillMount() {
    this.filterRowsDebounced = debounce(function () {
      this.filterRows.apply(this, [this.state.term]);
    }, 300)
  }

  componentDidMount() {
    this.getRows()
  }

  componentDidUpdate() {
    this.filterRef.current.focus()
  }

  handlePageSize(event) {
    const perPage = event.target.value
    const rows = this.getPageRows(this.state.body, this.state.page, perPage)
    const pages = Math.ceil(this.state.body.length / perPage)
    this.setState(() => ({ perPage, rows, pages }))
  }

  handlePaginate(page) {
    const rows = this.getPageRows(this.state.body, page, this.state.perPage)
    this.setState(() => ({ page, rows }))
  }

  handleFilter(event) {
    const term = this.filterRef.current.value
    this.setState(() => ({ term }))
    this.filterRowsDebounced()
  }

  getPageRows(body, page, perPage) {
    const start = page === 1 ? 0 : perPage * (page - 1)
    return body.slice(start, start + perPage)
  }

  filterRows() {
    const term = this.state.term
    const value = term.toLowerCase()
    const body = this.state.body.filter(row => {
      let match = false
      for (let i = 0; i < row.length; i++) {
        if (row[i].toLowerCase().includes(value)) {
          match = true
          break
        }
      }
      return match
    })
    const page = 1
    const rows = this.getPageRows(body, page, this.state.perPage)
    this.setState(() => ({ page, rows }))
  }

  getRowHTMLData(data) {
    let count = 0
    let head = []
    let body = []
    for (let i = 0; i < data.length; i++) {
      const child = data[i]
      const columns = isArray(child.props.children) ? child.props.children : [child.props.children]
      if (child.type.displayName === 'TableHead') {
        columns.forEach(column => {
          head.push(column.props.children)
        })
      } else {
        count++
        body[i] = []
        columns.forEach(column => {
          body[i].push(column.props.children)
        })
      }
    }
    return { count, head, body }
  }

  getAsyncRowData(data) {
    let count = 0
    let head = []
    let body = []
    for (let i = 0; i < data.length; i++) {
      const child = data[i]
      if (i === 0) {
        const columns = Object.keys(child)
        columns.forEach(column => {
          head.push(column)
        })
      }
      count++
      body[i] = []
      for (const field in child) {
        const column = child[field]
        body[i].push(column)
      }
    }
    return { count, head, body }
  }

  getRows() {
    const { children } = this.props
    let result = {}
    if (!isUndefined(children)) {
      const data = isArray(children) ? children : [children]
      result = this.getRowHTMLData(data)
      const { count, head, body } = result
      const pages = Math.ceil(count / this.state.perPage)
      const rows = this.getPageRows(body, 1, this.state.perPage)
      this.setState(() => ({ pages, head, body, rows }))
    } else if (!isUndefined(this.props.filterRows)) {
      this.props.filterRows(this.state.term, rowData => {
        result = this.getAsyncRowData(rowData)
        const { count, head, body } = result
        const pages = Math.ceil(count / this.state.perPage)
        const rows = this.getPageRows(body, 1, this.state.perPage)
        this.setState(() => ({ pages, head, body, rows }))
      })
    }
  }

  render() {
    const { className, ...others } = this.props
    const start = (this.state.page - 1) * this.state.perPage + 1
    const end = start + this.state.perPage - 1
    return (
      <StyledDataTable className={cx(className, 'data-table')} {...others}>
        <StyledDataTableHeader>
          <GroupInline>
            <Select label="Items per page" name="per_page" innerRef={this.perPageRef} onChange={this.handlePageSize} value={this.state.perPage} className={css`width: 40px;`}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
            <Input label="Search" name="term" innerRef={this.filterRef} onKeyUp={this.handleFilter} defaultValue={this.state.term} />
          </GroupInline>
        </StyledDataTableHeader>
        <Table className="data-table-table">
          <TableHead>{this.state.head.map(column => <TableCell key={uuid()}>{column}</TableCell>)}</TableHead>
          {this.state.rows.map(row => {
            return (
              <TableRow key={uuid()}>
                {row.map(column => {
                  return <TableCell key={uuid()}>{column}</TableCell>
                })}
              </TableRow>
            )
          })}
        </Table>
        <StyledDataTableFooter>
          <GroupInline>
            <span>Showing {start} through {end} of {this.state.body.length} entries</span>
            <Pagination pages={this.state.pages} page={this.state.page} onChange={this.handlePaginate}/>
          </GroupInline>
        </StyledDataTableFooter>
      </StyledDataTable>
    )
  }
}

DataTable.propTypes = {
  filterRows: PropTypes.func,
}

DataTable.defaultProps = {}

export default DataTable
