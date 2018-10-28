import React from 'react'

function withAsync(Component) {
  class Async extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: props.value,
        text: '',
        options: [],
        term: '',
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
          this.setState(() => ({ options, text, term }))
        }
      })
    }

    render() {
      const { forwardedRef, ...others } = this.props
      return <Component
        forwardedRef={forwardedRef}
        text={this.state.text}
        term={this.state.term}
        options={this.state.options}
        filterRef={this.filterRef}
        onKeyUp={this.filterOptions}
        {...others}
      />
    }
  }

  return React.forwardRef((props, ref) => {
    const { value, ...others } = props
    return <Async value={`${value}`} {...others} forwardedRef={ref} />
  })
}

export default withAsync
