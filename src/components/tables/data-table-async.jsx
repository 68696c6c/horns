import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
import uuid from 'uuid/v4'
import Table from './table'
import { GroupInline, Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { debounce, getParentByClassName, isEmptyObject } from '../../utils/utils'
import TableHead from './table-head'
import TableCell from './table-cell'
import TableRow from './table-row'

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
  let icon = <FaSort/>
  if (active && direction === SORT_ASC) {
    icon = <FaSortUp/>
  } else if (active && direction === SORT_DESC) {
    icon = <FaSortDown/>
  }
  return <StyledSortIcon className={cx('sort', active ? 'active' : '')} {...others}>{icon}</StyledSortIcon>
}

// @TODO add support for sorting by columns
// @TODO add better theming and variants
class DataTableAsync extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perPage: props.perPage,
      pages: 0,
      total: 0,
      head: [],
      rows: [],
      rowData: [],
      term: '',
      sortColumnIndex: -1,
      sortDir: '',
    }

    this.refresh = this.refresh.bind(this)
    this.getPage = this.getPage.bind(this)
    this.getRows = this.getRows.bind(this)
    this.getHead = this.getHead.bind(this)
    this.handlePageSize = this.handlePageSize.bind(this)
    this.handlePaginate = this.handlePaginate.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.filterRows = this.filterRows.bind(this)

    this.filterRef = React.createRef()
    this.perPageRef = React.createRef()
  }

  componentWillMount() {
    this.filterRowsDebounced = debounce(function (term) {
      this.filterRows.apply(this, [term])
    }, 300)
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    const { page, pages, perPage, sortColumnIndex, sortDir, term } = this.state
    this.props.filterRows({ page, pages, perPage, sortColumnIndex, sortDir, term }, response => {
      const { data, pagination } = response
      const { page, perPage, pages, total } = pagination
      const head = this.getHead(data)
      const { rows, rowData } = this.getRows(data)
      this.setState(() => ({ page, perPage, pages, total, head, rows, rowData }))
    })
  }

  getHead(data) {
    let head = []
    const columns = Object.keys(data[0])
    columns.forEach(column => {
      if (column !== 'dataset') {
        head.push(column)
      }
    })
    return head
  }

  getRows(data) {
    let rows = []
    let rowData = []
    for (let i = 0; i < data.length; i++) {
      const child = data[i]
      rows[i] = []
      rowData[i] = {}
      const fields = Object.keys(child)
      fields.forEach(field => {
        if (field === 'dataset') {
          const dataFields = Object.keys(child[field])
          dataFields.forEach(dataField => {
            rowData[i][dataField] = child[field][dataField]
          })
        } else {
          rows[i].push(child[field])
        }
      })
    }
    return { rows, rowData }
  }

  getPage(total, currentPage, currentPerPage, newPerPage) {
    const pageMax = currentPage * currentPerPage
    const target = pageMax > total ? total : pageMax
    return currentPage === 1 ? 1 : Math.ceil(target / newPerPage)
  }

  handlePageSize() {
    const { page, pages, perPage, sortColumnIndex, sortDir, term, total } = this.state
    const newPerPage = parseInt(this.perPageRef.current.value)
    const newPage = this.getPage(total, page, perPage, newPerPage)
    this.props.filterRows({ page: newPage, pages, perPage: newPerPage, sortColumnIndex, sortDir, term }, response => {
      const { data, pagination } = response
      const { page, perPage, pages, total } = pagination
      const { rows, rowData } = this.getRows(data)
      this.setState(() => ({ page, perPage, pages, total, rows, rowData }))
    })
  }

  handlePaginate(page) {
    const { pages, perPage, sortColumnIndex, sortDir, term } = this.state
    this.props.filterRows({ page, pages, perPage, sortColumnIndex, sortDir, term }, response => {
      const { data, pagination } = response
      const { page } = pagination
      const { rows, rowData } = this.getRows(data)
      this.setState(() => ({ page, rows, rowData }))
    })
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
    const { page, pages, perPage, term } = this.state
    this.props.filterRows({ page, pages, perPage, sortColumnIndex, sortDir, term }, response => {
      const { data } = response
      const { rows, rowData } = this.getRows(data)
      this.setState(() => ({ rows, rowData, sortColumnIndex, sortDir }))
    })
  }

  filterRows(term) {
    const { pages, perPage, sortColumnIndex, sortDir } = this.state
    this.props.filterRows({ page: 1, pages, perPage, sortColumnIndex, sortDir, term }, response => {
      const { data, pagination } = response
      const { page, pages, perPage, total } = pagination
      const { rows, rowData } = this.getRows(data)
      this.setState(() => ({ page, pages, perPage, total, rows, rowData, term }), () => this.filterRef.current.focus())
    })
  }

  render() {
    const { onClick, className, ...others } = this.props
    const { sortColumnIndex, sortDir, term, head, rows, rowData, pages, page, perPage, total } = this.state
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
            <Input
              label="Search"
              name="term"
              innerRef={this.filterRef}
              onKeyUp={this.handleFilter}
              defaultValue={term}
            />
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
          {rows.map((row, index) => {
            let dataset = {}
            if (!isEmptyObject(rowData[index])) {
              const dataFields = Object.keys(rowData[index])
              dataFields.forEach(dataField => {
                dataset[`data-${dataField}`] = rowData[index][dataField]
              })
            }
            return (
              <TableRow key={uuid()} {...dataset}>
                {row.map(column => <TableCell key={uuid()} onClick={onClick}>{column}</TableCell>)}
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

DataTableAsync.propTypes = {
  filterRows: PropTypes.func,
  perPage: PropTypes.number,
}

DataTableAsync.defaultProps = {
  perPage: 10,
}

export default DataTableAsync
