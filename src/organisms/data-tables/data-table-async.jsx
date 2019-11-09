import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import { InlineText } from '../../components/typography'
import { toClassNames } from '../../components/utils'
import {
  debounce,
  getParentByClassName,
  isEmptyObject,
} from '../../utils/utils'
import { TableHead, TableCell, TableRow } from '../../components'

import DataTableBase, { SORT_ASC, SORT_DESC, SortIcon, StyledHeaderCellContent } from './base'

function withAsyncData(Component) {
  return class DataTableRemote extends React.Component {
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
        paginationKey: uuid(),
      }

      this.getFilterRowsArgs = this.getFilterRowsArgs.bind(this)
      this.getPage = this.getPage.bind(this)
      this.getRows = this.getRows.bind(this)
      this.getHead = this.getHead.bind(this)
      this.handlePageSize = this.handlePageSize.bind(this)
      this.handlePaginate = this.handlePaginate.bind(this)
      this.handleFilter = this.handleFilter.bind(this)
      this.handleSort = this.handleSort.bind(this)
      this.filterRows = this.filterRows.bind(this)
      this.refresh = this.refresh.bind(this)

      this.filterRef = React.createRef()
      this.perPageRef = React.createRef()
    }

    componentWillMount() {
      this.filterRowsDebounced = debounce(function(term) {
        this.filterRows.apply(this, [term])
      }, 300)
    }

    componentDidMount() {
      this.refresh()
    }

    getFilterRowsArgs() {
      const {
        page,
        pages,
        perPage,
        sortColumnIndex,
        sortDir,
        term,
      } = this.state
      return { page, pages, perPage, sortColumnIndex, sortDir, term }
    }

    getHead(data) {
      const head = []
      const columns = Object.keys(data[0])
      columns.forEach(column => {
        if (column !== 'dataset') {
          head.push(column)
        }
      })
      return head
    }

    getRows(data) {
      const rows = []
      const rowData = []
      for (let i = 0; i < data.length; i += 1) {
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
      const { page: oldPage, perPage: oldPerPage, total: oldTotal } = this.state
      const newPerPage = parseInt(this.perPageRef.current.value, 10)
      const newPage = this.getPage(oldTotal, oldPage, oldPerPage, newPerPage)
      const args = this.getFilterRowsArgs()
      args.perPage = newPerPage
      args.page = newPage
      args.term = ''
      this.filterRef.current.value = ''
      this.props.filterRows(args, response => {
        const { data, pagination } = response
        const { page, perPage, pages, total } = pagination
        const { rows, rowData } = this.getRows(data)
        this.setState(
          {
            term: '',
            page,
            perPage,
            pages,
            total,
            rows,
            rowData,
            paginationKey: uuid(),
          },
          () => {
            this.handleFilter()
          }
        )
      })
    }

    handlePaginate(page, callback) {
      const args = this.getFilterRowsArgs()
      args.page = page
      this.props.filterRows(args, response => {
        const { data, pagination } = response
        const { perPage, total } = pagination
        const { rows, rowData } = this.getRows(data)
        const pages = Math.ceil(total / perPage)
        this.setState({ pages, page, rows, rowData }, () => {
          callback(this.state.pages)
        })
      })
    }

    handleFilter() {
      const term = this.filterRef.current.value
      this.filterRowsDebounced(term)
    }

    handleSort(event) {
      const parent = getParentByClassName(event.target, 'table-cell')
      const sortColumnIndex = parseInt(parent.dataset.index, 10)
      let sortDir = SORT_ASC
      if (sortColumnIndex === this.state.sortColumnIndex) {
        sortDir = this.state.sortDir === SORT_ASC ? SORT_DESC : SORT_ASC
      }
      const args = this.getFilterRowsArgs()
      args.sortDir = sortDir
      args.sortColumnIndex = sortColumnIndex
      this.props.filterRows(args, response => {
        const { data } = response
        const { rows, rowData } = this.getRows(data)
        this.setState(() => ({ rows, rowData, sortColumnIndex, sortDir }))
      })
    }

    filterRows(term) {
      const args = this.getFilterRowsArgs()
      args.term = term
      this.props.filterRows(args, response => {
        const { data, pagination } = response
        const { page, pages, perPage, total } = pagination
        const { rows, rowData } = this.getRows(data)
        this.setState(
          {
            page,
            pages,
            perPage,
            total,
            rows,
            rowData,
            term,
            paginationKey: uuid(),
          },
          () => this.filterRef.current.focus()
        )
      })
    }

    refresh() {
      const args = this.getFilterRowsArgs()
      this.props.filterRows(args, response => {
        const { data, pagination } = response
        const { page, perPage, pages, total } = pagination
        const head = this.getHead(data)
        const { rows, rowData } = this.getRows(data)
        this.setState({ page, perPage, pages, total, head, rows, rowData, paginationKey: uuid(), })
      })
    }

    render() {
      const { onClick, className, ...others } = this.props
      const {
        sortColumnIndex,
        sortDir,
        term,
        head,
        rows,
        rowData,
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
          {rows.map((row, index) => {
            const dataset = {}
            if (!isEmptyObject(rowData[index])) {
              const dataFields = Object.keys(rowData[index])
              dataFields.forEach(dataField => {
                dataset[`data-${dataField}`] = rowData[index][dataField]
              })
            }
            return (
              <TableRow key={uuid()} {...dataset}>
                {row.map(column => (
                  <TableCell key={uuid()} onClick={onClick}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </Component>
      )
    }
  }
}

const DataTableAsync = withAsyncData(DataTableBase)

DataTableAsync.propTypes = {
  filterRows: PropTypes.func,
  perPage: PropTypes.number,
}

DataTableAsync.defaultProps = {
  perPage: 10,
}

export default DataTableAsync
