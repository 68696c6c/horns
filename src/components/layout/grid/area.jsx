import React from 'react'
import PropTypes from 'prop-types'

import {
  handleProps,
  elementPropTypes,
  elementDefaultProps,
  paddedPropTypes,
  paddedDefaultProps,
} from '../../../mixins'
import * as Styled from './styles'

const Area = ({ children, ...others }) => (
  <Styled.Area {...handleProps(others, 'area')}>{children}</Styled.Area>
)

Area.propTypes = {
  ...elementPropTypes(),
  ...paddedPropTypes(),
  area: PropTypes.string,
}

Area.defaultProps = {
  ...elementDefaultProps(),
  ...paddedDefaultProps('small', false),
  area: '',
}

export default Area
