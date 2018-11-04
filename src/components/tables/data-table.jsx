import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import uuid from 'uuid/v4'
import Table from './table'
import { GroupInline, Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { debounce, getParentByClassName, isArray, isUndefined } from '../../utils/utils'
import TableHead from './table-head'
import TableCell from './table-cell'
import TableRow from './table-row'
import { rgb } from '../../themes/utils'

const SORT_ASC = 'asc'
const SORT_DESC = 'desc'

// This component is for content that slides out under/between rows in a DataTable.
// @TODO implement this.
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
const StyledSortIcon = styled('a')`
  cursor: pointer;
`
const SortIcon = ({ active, direction, ...others }) => {
  let icon = <FaSort />
  if (active && direction === SORT_ASC) {
    icon = <FaSortUp />
  } else if (active && direction === SORT_DESC) {
    icon = <FaSortDown />
  }
  return <StyledSortIcon className={cx('sort', active ? 'active' : '')} {...others}>{icon}</StyledSortIcon>
}

// @TODO add support for sorting by columns
// @TODO add better theming and variants
class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perPage: props.perPage,
      pages: 0,
      total: 0,
      head: [],
      body: [],
      rows: [],
      term: '',
      sortColumnIndex: -1,
      sortDir: '',
    }

    this.filterRows = this.filterRows.bind(this)
    this.getFilteredRows = this.getFilteredRows.bind(this)
    this.handlePageSize = this.handlePageSize.bind(this)
    this.handlePaginate = this.handlePaginate.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.getRowHTMLData = this.getRowHTMLData.bind(this)
    this.getPageRows = this.getPageRows.bind(this)

    this.filterRef = React.createRef()
    this.perPageRef = React.createRef()
  }

  componentWillMount() {
    this.filterRowsDebounced = debounce(function (term) {
      this.filterRows.apply(this, [term])
    }, 300)
  }

  componentDidMount() {
    const { children } = this.props
    let result = {}
    if (!isUndefined(children)) {
      const data = isArray(children) ? children : [children]
      result = this.getRowHTMLData(data)
      const { total, head, body } = result
      const pages = Math.ceil(total / this.state.perPage)
      const rows = this.getPageRows(body, 1, this.state.perPage)
      this.setState(() => ({ pages, head, body, rows, total }))
    }
  }

  getHead(data) {
    let head = []
    const columns = Object.keys(data[0])
    columns.forEach(column => {
      head.push(column)
    })
    return head
  }

  getRows(data) {
    let rows = []
    for (let i = 0; i < data.length; i++) {
      const child = data[i]
      rows[i] = []
      for (const field in child) {
        const column = child[field]
        rows[i].push(column)
      }
    }
    return rows
  }

  handlePageSize() {
    const perPage = parseInt(this.perPageRef.current.value)
    const body = this.getPageRows(this.state.body, this.state.page, perPage)
    const rows = this.getFilteredRows(body, this.state.term)
    const pages = Math.ceil(this.state.body.length / perPage)
    this.setState(() => ({ perPage, rows, pages }))
  }

  handlePaginate(page) {
    console.log('handlePaginate', page)
    const rows = this.getPageRows(this.state.body, page, this.state.perPage)
    this.setState(() => ({ page, rows }))
  }

  handleFilter() {
    const term = this.filterRef.current.value
    this.filterRowsDebounced(term)
  }

  handleSort(event) {
    const parent = getParentByClassName(event.target, 'table-cell')
    const sortColumnIndex = parseInt(parent.dataset.index)
    let sortDir = SORT_ASC
    if (sortColumnIndex === this.state.sortColumnIndex) {
      sortDir = this.state.sortDir === SORT_ASC ? SORT_DESC : SORT_ASC
    }
    const body = this.state.body
    let i1 = -1
    let i2 = 1
    if (sortDir === SORT_DESC) {
      i1 = 1
      i2 = -1
    }
    body.sort((a, b) => {
      const aValue = a[sortColumnIndex]
      const bValue = b[sortColumnIndex]
      return (aValue < bValue) ? i1 : ((aValue > bValue) ? i2 : 0)
    })
    const filteredBody = this.getFilteredRows(body, this.state.term)
    const rows = this.getPageRows(filteredBody, this.state.page, this.state.perPage)
    this.setState(() => ({ rows, sortColumnIndex, sortDir }))
  }

  getPageRows(body, page, perPage) {
    const start = (page - 1) * perPage
    console.log('getPageRows', start, start + perPage)
    return body.slice(start, start + perPage)
  }

  getFilteredRows(body, term) {
    return body.filter(row => {
      let match = false
      for (let i = 0; i < row.length; i++) {
        if (row[i].toLowerCase().includes(term)) {
          match = true
          break
        }
      }
      return match
    })
  }

  filterRows(term) {
    const value = term.toLowerCase()
    const body = this.getFilteredRows(this.state.body, value)
    const page = 1
    const rows = this.getPageRows(body, page, this.state.perPage)
    const pages = Math.ceil(body.length / this.state.perPage)
    this.setState(() => ({ term, page, rows, pages }), () => this.filterRef.current.focus())
  }

  getRowHTMLData(data) {
    let total = 0
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
        total++
        const bodyIndex = i - 1
        body[bodyIndex] = []
        columns.forEach(column => {
          body[bodyIndex].push(column.props.children)
        })
      }
    }
    return { total, head, body }
  }

  render() {
    const { className, ...others } = this.props
    const { sortColumnIndex, sortDir, term, head, rows, body, pages, page, perPage, total } = this.state
    const start = (page - 1) * perPage + 1
    const end = start + perPage - 1
    return (
      <StyledDataTable className={cx(className, 'data-table')} {...others}>
        <StyledDataTableHeader>
          <GroupInline>
            <Select
              label="Items per page"
              name="per_page"
              ref={this.perPageRef}
              onChange={this.handlePageSize}
              value={perPage}
              className={css`width: 40px;`}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
            <Input label="Search" name="term" innerRef={this.filterRef} onKeyUp={this.handleFilter} defaultValue={term} />
          </GroupInline>
        </StyledDataTableHeader>
        <Table className="data-table-table" responsive="scroll">
          <TableHead>
            {head.map((column, index) => (
              <TableCell key={uuid()} data-index={index}>
                <SortIcon active={sortColumnIndex === index} direction={sortDir} onClick={this.handleSort}/>
                {column}
              </TableCell>
            ))}
          </TableHead>
          {rows.map(row => {
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
            <span>Showing {start} through {end} of {total} entries</span>
            <Pagination pages={pages} page={page} onChange={this.handlePaginate}/>
          </GroupInline>
        </StyledDataTableFooter>
      </StyledDataTable>
    )
  }
}

DataTable.propTypes = {
  perPage: PropTypes.number,
}

DataTable.defaultProps = {
  perPage: 10,
}

export default DataTable
