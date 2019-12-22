import React from 'react'

import {
  childrenDefaultProps,
  childrenPropTypes,
  handleProps,
} from '../../mixins'
import * as Styled from './styles'

const ImageFrame = ({ children, ...others }) => (
  <Styled.ImageFrame {...handleProps(others, 'image-frame')}>
    {children}
  </Styled.ImageFrame>
)

ImageFrame.propTypes = {
  ...childrenPropTypes(),
}

ImageFrame.defaultProps = {
  ...childrenDefaultProps(),
}

export default ImageFrame
