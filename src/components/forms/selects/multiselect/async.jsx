import React from 'react'
import PropTypes from 'prop-types'
import withAsync from '../with-async'
import { Multiselect } from './multiselect'

// Docz's PropsTable doesn't recognize props defined on higher-order components, so this dummy component here
// exists just for use in the PropsTable on the docs page.  This component should NOT be exported for use outside this
// app since it won't actually function.
// @TODO delete this once we've migrated to storybook.
export const MultiselectAsyncDocz = () => <React.Fragment />

MultiselectAsyncDocz.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  hasError: PropTypes.bool,
  filterOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}

MultiselectAsyncDocz.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  required: false,
  hasError: false,
  onChange: () => {},
}

export default withAsync(Multiselect)
