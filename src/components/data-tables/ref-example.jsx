import React from 'react'
import DataTable from './data-table'
import DataTableAsync from './data-table-async'

export class RefExample extends React.Component {
  constructor(props) {
    super(props)
    this.tableRef = React.createRef()
    this.update = this.update.bind(this)
  }

  update() {
    console.log('ref', this.tableRef.current)
  }

  render() {
    const { children } = this.props
    return (
      <>
        <button type="button" onClick={this.update}>console.log ref</button>
        <DataTable ref={this.tableRef}>{children}</DataTable>
      </>
    )
  }
}

export class RefExampleAsync extends React.Component {
  constructor(props) {
    super(props)
    this.tableRef = React.createRef()
    this.update = this.update.bind(this)
  }

  update() {
    console.log('ref', this.tableRef.current)
    this.tableRef.current.refresh()
  }

  render() {
    const { filterRows } = this.props
    return (
      <>
        <button type="button" onClick={this.update}>console.log ref</button>
        <DataTableAsync
          ref={this.tableRef}
          filterRows={filterRows}
        />
      </>
    )
  }
}
