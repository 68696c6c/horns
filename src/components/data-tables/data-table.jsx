import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { InlineText } from '../typography'
import { toClassNames, isReactFragment } from '../utils'
import {
  debounce,
  getParentByClassName,
  isArray,
  isUndefined,
} from '../../utils/utils'
import { TableHead, TableCell, TableRow } from '../tables'

import DataTableBase, { SORT_ASC, SORT_DESC, SortIcon, StyledHeaderCellContent } from './base'

// @TODO add support for sorting by columns
// @TODO add better theming and variants
// @TODO Has Bugs, refactor to be more like DataTableAsync
// class DataTable extends React.Component {
// }

function withStaticData(Component) {
  return class DataTableStatic extends React.Component {
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
        paginationKey: uuid(),
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
      const { page, perPage, total, term, body: oldBody } = this.state
      const newPerPage = parseInt(this.perPageRef.current.value, 10)
      const newPage = this.getPage(total, page, perPage, newPerPage)
      const body = this.getPageRows(oldBody, newPage, newPerPage)
      const rows = this.getFilteredRows(body, term)
      const pages = Math.ceil(total / newPerPage)
      this.filterRef.current.value = ''
      this.setState({ term: '', perPage: newPerPage, page: newPage, rows, pages, paginationKey: uuid() }, () => {
        this.handleFilter()
      })
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
      const {
        body,
        page,
        perPage,
        term,
        sortDir: oldSortDir,
        sortColumnIndex: oldSortColumnIndex,
      } = this.state
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
      const rows = this.getPageRows(filteredBody, page, perPage)
      this.setState(() => ({ rows, sortColumnIndex, sortDir }))
    }

    getPageRows(body, page, perPage) {
      const start = (page - 1) * perPage
      const end = start - 1 + perPage + 1
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
      this.setState({ term, page, rows, pages, paginationKey: uuid(), }, () =>
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
        paginationKey,
      } = this.state
      const start = (page - 1) * perPage + 1
      const end = start + perPage - 1
      const displayEnd = end > total ? total : end
      return (
        <Component
          className={toClassNames(className, 'data-table')}
          handlePageSize={this.handlePageSize}
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
          handlePaginate={this.handlePaginate}
          head={head}
          rows={rows}
          term={term}
          sortColumnIndex={sortColumnIndex}
          sortDir={sortDir}
          start={start}
          end={displayEnd}
          total={total}
          page={page}
          pages={pages}
          perPage={perPage}
          filterRef={this.filterRef}
          perPageRef={this.perPageRef}
          paginationKey={paginationKey}
          {...others}
        >
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
        </Component>
      )
    }
  }
}

const DataTable = withStaticData(DataTableBase)

DataTable.propTypes = {
  perPage: PropTypes.number,
}

DataTable.defaultProps = {
  perPage: 10,
}

export default DataTable
