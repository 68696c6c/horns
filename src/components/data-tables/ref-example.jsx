import React from 'react'
import DataTable from './data-table'

class RefExample extends React.Component {
  constructor(props) {
    super(props)
    this.tableRef = React.createRef()
    this.update = this.update.bind(this)
  }

  update() {
    console.log('ref', this.tableRef.current)
    this.tableRef.current.getRows()
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.update}>Update Table</button>
        <DataTable
          ref={this.tableRef}
          filterRows={this.props.filterRows}
        />
      </React.Fragment>
    )
  }
}

export default RefExample
