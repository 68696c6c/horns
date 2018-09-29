import React from 'react'
import PropTypes from 'prop-types'
import withAsync from '../with-async'
import Select from './select'

const SelectAsync = withAsync(Select)

SelectAsync.propTypes = {
  debug: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  filter: PropTypes.bool,
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

SelectAsync.defaultProps = {
  debug: false,
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  filter: false,
  onChange: () => {
  },
}

export default SelectAsync
