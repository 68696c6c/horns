import React from 'react'
import PropTypes from 'prop-types'

import {
  handleProps,
  layoutPropTypes,
  layoutDefaultProps,
} from '../../../mixins'
import * as Styled from './styles'

const Columns = ({ children, ...others }) => (
  <Styled.Columns {...handleProps(others, 'columns')}>
    {children}
  </Styled.Columns>
)

Columns.propTypes = {
  ...layoutPropTypes(),
  columns: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

Columns.defaultProps = {
  ...layoutDefaultProps(),
  columns: 0,
}

export default Columns
