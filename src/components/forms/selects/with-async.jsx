import React from 'react'

function withAsync(Component) {
  return class Async extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: props.value,
        text: '',
        options: [],
      }

      this.filterOptions = this.filterOptions.bind(this)
      this.filterRef = React.createRef()

      this.filterOptions()
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
        text={this.state.text}
        options={this.state.options}
        filterRef={this.filterRef}
        onKeyUp={this.filterOptions}
        {...this.props}
      />
    }
  }
}

export default withAsync