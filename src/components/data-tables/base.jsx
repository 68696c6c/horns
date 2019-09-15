/** @jsx jsx */
/* eslint-disable react/forbid-prop-types */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'
import uuid from 'uuid/v4'

import { InlineText } from '../typography'
import { Input, Select } from '../forms'
import Pagination from '../nav/pagination'
import { toClassNames } from '../utils'

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
    <div className={toClassNames('row-info', className, style)} {...others}>
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

const DataTableBase = ({
  handlePageSize,
  handleFilter,
  handleSort,
  handlePaginate,
  head,
  rows,
  term,
  sortColumnIndex,
  sortDir,
  start,
  end,
  total,
  page,
  pages,
  perPage,
  perPageRef,
  filterRef,
  paginationKey,
  ...others
}) => {
  return (
    <StyledDataTable {...others}>
      <StyledDataTableControls>
        <StyledDataTableField>
          <Select
            label="Items per page"
            name="per_page"
            ref={perPageRef}
            onChange={handlePageSize}
            value={perPage}
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
            innerRef={filterRef}
            onKeyUp={handleFilter}
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
                  onClick={handleSort}
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
        <InlineText>{`Showing ${start} through ${end} of ${total} entries`}</InlineText>
        <Pagination
          key={paginationKey}
          pages={pages}
          page={page}
          onChange={handlePaginate}
        />
      </StyledDataTableControls>
    </StyledDataTable>
  )
}

DataTableBase.propTypes = {
  handlePageSize: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handlePaginate: PropTypes.func.isRequired,
  head: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired,
  sortColumnIndex: PropTypes.number.isRequired,
  sortDir: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  paginationKey: PropTypes.string.isRequired,
  perPageRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  filterRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
}

export default DataTableBase
