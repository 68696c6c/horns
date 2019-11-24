import React from 'react'

import { handleProps } from '../../mixins'
import * as Styled from './styles'

const Caption = ({ children, variant, ...others }) => {
  const props = others
  let Tag = Styled.TextInline
  if (variant === 'block') {
    Tag = Styled.TextBlock
  }
  return <Tag {...handleProps(props, 'caption')}>{children}</Tag>
}

Caption.propTypes = {
  ...Styled.inlineOrBlockPropTypes(),
}

Caption.defaultProps = {
  ...Styled.inlineOrBlockDefaultProps('caption'),
}

export default Caption
