import React from 'react'

import {
  handleProps,
  elementDefaultProps,
  elementPropTypes,
  responsivePropTypes,
  responsiveDefaultProps,
  paddedDefaultProps,
  paddedPropTypes,
  flexDefaultProps,
  flexPropTypes,
} from '../../../mixins'
import * as Styled from './styles'

const ButtonContainer = ({ children, ...others }) => (
  <Styled.ButtonContainer {...handleProps(others, 'button-container')}>
    {children}
  </Styled.ButtonContainer>
)

ButtonContainer.propTypes = {
  ...elementPropTypes(),
  ...responsivePropTypes(),
  ...paddedPropTypes(),
  ...flexPropTypes(),
}

ButtonContainer.defaultProps = {
  ...elementDefaultProps(),
  ...responsiveDefaultProps(),
  ...paddedDefaultProps('small'),
  ...flexDefaultProps('right'),
}

export default ButtonContainer
