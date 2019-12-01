import React from 'react'
import PropTypes from 'prop-types'

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
      const { current } = this.filterRef
      const term = current === null ? '' : current.value
      const { filterOptions } = this.props
      filterOptions(term, options => {
        if (!this.cancelled) {
          const { value } = this.state
          const selectedOpt = options.filter(option => {
            return option.value === value
          })
          const text = selectedOpt.length > 0 ? selectedOpt[0].label : undefined
          console.log('withAsync text', text, selectedOpt)
          console.log('withAsync value', value)
          this.setState({ options, text, term, value })
        }
      })
    }

    render() {
      const { forwardedRef, ...others } = this.props
      const { text, term, options, value } = this.state
      return (
        <Component
          forwardedRef={forwardedRef}
          text={text}
          term={term}
          options={options}
          value={value}
          filterRef={this.filterRef}
          onKeyUp={this.filterOptions}
          {...others}
        />
      )
    }
  }

  Async.propTypes = {
    forwardedRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.object }),
    ]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    filterOptions: PropTypes.func.isRequired,
  }

  Async.defaultProps = {
    value: '',
    forwardedRef: undefined,
  }

  return React.forwardRef((props, ref) => (
    <Async {...props} forwardedRef={ref} />
  ))
}

export default withAsync
