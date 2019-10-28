import React from 'react'
import PropTypes from 'prop-types'

import { palletColorShades } from '../../../config'
import { handleProps, propTypeChildren } from '../../../utils/component'
import * as Styled from './styles'

const Area = ({ children, ...others }) => (
  <Styled.Area {...handleProps(others, 'area')}>{children}</Styled.Area>
)

Area.propTypes = {
  children: propTypeChildren(),
  colorway: PropTypes.oneOf(palletColorShades),
  area: PropTypes.string,
}

Area.defaultProps = {
  children: null,
  colorway: '',
  area: '',
}

export default Area
