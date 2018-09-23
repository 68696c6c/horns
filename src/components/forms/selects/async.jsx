import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import Select from './single'

class SelectAsync extends React.Component {
  constructor(props) {
    super(props)

    this.setOptions = this.setOptions.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: props.value,
      options: [],
    }

    this.setOptions()
  }

  setOptions() {
    this.props.loadOptions(this.props.value, options => {
      this.setState(() => ({ options }))
    })
  }

  handleChange(event) {
    const value = event.target.value
    this.setState(() => ({ value }))
    this.props.onChange(event)
  }

  render() {
    return (
      <Select {...this.props} async={true} value={this.state.value} onChange={this.handleChange}>
        {this.state.options.map(option => {
          return <option key={uuid()} value={option.value}>{option.label}</option>
        })}
      </Select>
    )
  }
}

SelectAsync.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  loadOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

SelectAsync.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  onChange: () => {
  },
}

export default SelectAsync
