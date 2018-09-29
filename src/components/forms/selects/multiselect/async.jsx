import React from 'react'
import PropTypes from 'prop-types'
import withAsync from '../with-async'
import Multiselect from './multiselect'

const MultiselectAsync = withAsync(Multiselect)

MultiselectAsync.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  filter: PropTypes.bool,
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

MultiselectAsync.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  filter: false,
  onChange: () => {
  },
}

export default MultiselectAsync
