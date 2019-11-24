import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, paddedDefaultProps, paddedPropTypes } from '../../mixins'
import * as Styled from './styles'

const Label = ({ children, ...others }) => (
  <Styled.Label {...handleProps(others, 'label')}>{children}</Styled.Label>
)

Label.propTypes = {
  ...Styled.inlineOrBlockPropTypes(),
  ...paddedPropTypes(),
  required: PropTypes.bool,
}

Label.defaultProps = {
  ...Styled.inlineOrBlockDefaultProps('label'),
  ...paddedDefaultProps('small'),
  required: false,
}

export default Label
