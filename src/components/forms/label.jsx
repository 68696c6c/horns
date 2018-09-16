import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { baseLabel } from './utils'

const Label = styled('label')`
  display: block;
  margin: 1em 0 0 0;
  ${({ theme }) => baseLabel(theme)}
`

Label.propTypes = {
  htmlFor: PropTypes.string,
}

Label.defaultProps = {
  htmlFor: '',
}

export default Label
