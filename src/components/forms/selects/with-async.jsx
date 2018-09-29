import React from 'react'

function withAsync(Component) {
  return class Async extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        options: [],
      }

      this.filterOptions = this.filterOptions.bind(this)
      this.filterRef = React.createRef()
      this.selectRef = React.createRef()

      this.filterOptions()
    }

    componentDidUpdate() {
      this.filterRef.current.focus()
    }

    filterOptions() {
      const value = this.state.value
      const term = this.filterRef.current === null ? '' : this.filterRef.current.value
      this.props.filterOptions(term, options => {
        if (!this.cancelled) {
          const selectedOption = options.filter(option => {
            return option.value === value
          })
          const text = selectedOption.length > 0 ? selectedOption[0].label : undefined
          this.setState(() => ({ options, text }))
        }
      })
    }

    render() {
      return <Component
        open={this.state.open}
        options={this.state.options}
        value={this.state.value}
        text={this.state.text}
        selectRef={this.selectRef}
        filterRef={this.filterRef}
        onChange={this.handleChange}
        onKeyUp={this.filterOptions}
        {...this.props}
      />
    }
  }
}

export default withAsync
