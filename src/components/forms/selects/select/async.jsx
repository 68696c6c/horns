import React from 'react'
import PropTypes from 'prop-types'
import withAsync from '../with-async'
import { Select } from './select'

// Docz's PropsTable doesn't recognize props defined on higher-order components, so this dummy component here
// exists just for use in the PropsTable on the docs page.  This component should NOT be exported for use outside this
// app since it won't actually function.
export const SelectAsyncDocz = () => <React.Fragment/>

SelectAsyncDocz.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

SelectAsyncDocz.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  onChange: () => {
  },
}

export default withAsync(Select)
