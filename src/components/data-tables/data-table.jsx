/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import uuid from 'uuid/v4'

import { InlineText } from '../typography'
import { Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { toClassNames, isReactFragment } from '../utils'
import {
  debounce,
  getParentByClassName,
  isArray,
  isUndefined,
} from '../../utils/utils'

import { Table, TableHead, TableCell, TableRow } from '../tables'

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
    <div className={('row-info', className, style)} {...others}>
      {children}
    </div>
  )
}

const StyledDataTable = styled('div')``

const StyledDataTableControls = styled('div')`
  margin-top: ${({ theme }) => theme.spacing.small};
  display: flex;
  justify-content: space-between;
`

const StyledSortIcon = styled('a')`
  cursor: pointer;
  display: flex;
  font-size: 1em;
  line-height: 1em;
  margin-right: 2px;
`

const StyledDataTableField = styled('div')``

const StyledHeaderCellContent = styled('span')`
  display: flex;
  align-items: center;
  strong {
    font-size: 1em;
    line-height: 1em;
    display: block;
  }
`

const SortIcon = ({ active, direction, ...others }) => {
  let icon = <FaSort />
  if (active && direction === SORT_ASC) {
    icon = <FaSortUp />
  } else if (active && direction === SORT_DESC) {
    icon = <FaSortDown />
  }
  return (
    <StyledSortIcon
      className={toClassNames('sort', active ? 'active' : '')}
      {...others}
    >
      {icon}
    </StyledSortIcon>
  )
}

// @TODO add support for sorting by columns
// @TODO add better theming and variants
// @TODO Has Bugs, refactor to be more like DataTableAsync
class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.getPage = this.getPage.bind(this)
    this.filterRows = this.filterRows.bind(this)
    this.getFilteredRows = this.getFilteredRows.bind(this)
    this.handlePageSize = this.handlePageSize.bind(this)
    this.handlePaginate = this.handlePaginate.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.getRowHTMLData = this.getRowHTMLData.bind(this)
    this.getPageRows = this.getPageRows.bind(this)

    const { children, perPage } = props
    let head = []
    let body = []
    let rows = []
    let total = 0
    let pages = 0
    if (!isUndefined(children)) {
      const data = isArray(children) ? children : [children]
      const result = this.getRowHTMLData(data)
      ;({ total, head, body } = result)
      pages = Math.ceil(total / perPage)
      rows = this.getPageRows(body, 1, perPage)
    }

    this.state = {
      page: 1,
      perPage,
      pages,
      total,
      head,
      body,
      rows,
      term: '',
      sortColumnIndex: -1,
      sortDir: '',
    }

    this.filterRef = React.createRef()
    this.perPageRef = React.createRef()
  }

  componentWillMount() {
    this.filterRowsDebounced = debounce(function(term) {
      this.filterRows.apply(this, [term])
    }, 300)
  }

  getPage(total, currentPage, currentPerPage, newPerPage) {
    const pageMax = currentPage * currentPerPage
    const target = pageMax > total ? total : pageMax
    return currentPage === 1 ? 1 : Math.ceil(target / newPerPage)
  }

  handlePageSize() {
    const { page, perPage, total, term } = this.state
    const newPerPage = parseInt(this.perPageRef.current.value, 10)
    const newPage = this.getPage(total, page, perPage, newPerPage)
    const body = this.getPageRows(this.state.body, newPage, newPerPage)
    const rows = this.getFilteredRows(body, term)
    const pages = Math.ceil(total / newPerPage)
    this.setState(() => ({ perPage: newPerPage, page: newPage, rows, pages }))
  }

  handlePaginate(page, callback) {
    const { body, perPage } = this.state
    const rows = this.getPageRows(body, page, perPage)
    const pages = Math.ceil(body.length / perPage)
    this.setState({ page, rows, pages }, () => {
      callback(this.state.pages)
    })
  }

  handleFilter() {
    const term = this.filterRef.current.value
    this.filterRowsDebounced(term)
  }

  handleSort(event) {
    const { body, page, perPage, term, sortDir: oldSortDir, sortColumnIndex: oldSortColumnIndex } = this.state
    const parent = getParentByClassName(event.target, 'table-cell')
    const sortColumnIndex = parseInt(parent.dataset.index, 10)
    let sortDir = SORT_ASC
    if (sortColumnIndex === oldSortColumnIndex) {
      sortDir = oldSortDir === SORT_ASC ? SORT_DESC : SORT_ASC
    }
    let i1 = -1
    let i2 = 1
    if (sortDir === SORT_DESC) {
      i1 = 1
      i2 = -1
    }
    body.sort((a, b) => {
      const aValue = a[sortColumnIndex]
      const bValue = b[sortColumnIndex]
      return aValue < bValue ? i1 : aValue > bValue ? i2 : 0
    })
    const filteredBody = this.getFilteredRows(body, term)
    const rows = this.getPageRows(
      filteredBody,
      page,
      perPage
    )
    this.setState(() => ({ rows, sortColumnIndex, sortDir }))
  }

  getPageRows(body, page, perPage) {
    const start = (page - 1) * perPage
    const end = ((start - 1) + perPage) + 1
    return body.slice(start, end)
  }

  getFilteredRows(body, term) {
    return body.filter(row => {
      let match = false
      for (let i = 0; i < row.length; i += 1) {
        if (row[i].toLowerCase().includes(term)) {
          match = true
          break
        }
      }
      return match
    })
  }

  filterRows(term) {
    const { body: oldBody, perPage } = this.state
    const value = term.toLowerCase()
    const body = this.getFilteredRows(oldBody, value)
    const page = 1
    const rows = this.getPageRows(body, page, perPage)
    const pages = Math.ceil(body.length / perPage)
    this.setState({ term, page, rows, pages }, () =>
      this.filterRef.current.focus()
    )
  }

  getRowHTMLData(data) {
    let total = 0
    let haveHead = false
    const head = []
    const body = []

    const handleRow = (child, i) => {
      const columns = child.props.children
      if (
        child.type.displayName === 'TableHead' ||
        child.type.name === 'TableHead' ||
        (i === 0 && !haveHead)
      ) {
        haveHead = true
        columns.forEach(column => {
          head.push(column.props.children)
        })
      } else {
        total += 1
        const bodyIndex = i - 1
        body[bodyIndex] = []
        columns.forEach(column => {
          body[bodyIndex].push(column.props.children)
        })
      }
    }

    const getData = d => {
      d.forEach((child, i) => {
        if (isArray(child)) {
          child.forEach((c, ci) => {
            handleRow(c, ci + 1)
          })
        } else if (isReactFragment(child)) {
          getData(child.props.children)
        } else if (isArray(child.props.children)) {
          handleRow(child, i)
        }
      })
    }

    getData(data)

    return { total, head, body }
  }

  render() {
    const { className, ...others } = this.props
    const {
      sortColumnIndex,
      sortDir,
      term,
      head,
      rows,
      pages,
      page,
      perPage,
      total,
    } = this.state
    const start = (page - 1) * perPage + 1
    const end = start + perPage - 1
    const displayEnd = end > total ? total : end
    return (
      <StyledDataTable
        className={toClassNames(className, 'data-table')}
        {...others}
      >
        <StyledDataTableControls>
          <StyledDataTableField>
            <Select
              label="Items per page"
              name="per_page"
              ref={this.perPageRef}
              onChange={this.handlePageSize}
              value={perPage}
              css={css`
                width: 40px;
              `}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
          </StyledDataTableField>
          <StyledDataTableField>
            <Input
              label="Search"
              name="term"
              innerRef={this.filterRef}
              onKeyUp={this.handleFilter}
              defaultValue={term}
            />
          </StyledDataTableField>
        </StyledDataTableControls>
        <Table className="data-table-table" responsive="scroll">
          <TableHead>
            {head.map((column, index) => (
              <TableCell key={uuid()} data-index={index}>
                <StyledHeaderCellContent>
                  <SortIcon
                    active={sortColumnIndex === index}
                    direction={sortDir}
                    onClick={this.handleSort}
                  />
                  <InlineText weight="bold">{column}</InlineText>
                </StyledHeaderCellContent>
              </TableCell>
            ))}
          </TableHead>
          {rows.map(row => (
            <TableRow key={uuid()}>
              {row.map(column => (
                <TableCell key={uuid()}>{column}</TableCell>
              ))}
            </TableRow>
          ))}
        </Table>
        <StyledDataTableControls>
          <InlineText>{`Showing ${start} through ${displayEnd} of ${total} entries`}</InlineText>
          <Pagination
            pages={pages}
            page={page}
            onChange={this.handlePaginate}
          />
        </StyledDataTableControls>
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
