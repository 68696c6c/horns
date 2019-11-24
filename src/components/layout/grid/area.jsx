import React from 'react'
import PropTypes from 'prop-types'

import {
  elementPropTypes,
  handleProps,
  elementDefaultProps,
} from '../../../mixins'
import * as Styled from './styles'

const Area = ({ children, ...others }) => (
  <Styled.Area {...handleProps(others, 'area')}>{children}</Styled.Area>
)

Area.propTypes = {
  ...elementPropTypes(),
  area: PropTypes.string,
}

Area.defaultProps = {
  ...elementDefaultProps(),
  area: '',
}

export default Area
