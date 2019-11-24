import React from 'react'

import { handleProps } from '../../mixins'
import * as Styled from './styles'

const Legal = ({ children, variant, ...others }) => {
  const props = others
  let Tag = Styled.TextInline
  if (variant === 'block') {
    Tag = Styled.TextBlock
  }
  return <Tag {...handleProps(props, 'legal')}>{children}</Tag>
}

Legal.propTypes = {
  ...Styled.inlineOrBlockPropTypes(),
}

Legal.defaultProps = {
  ...Styled.inlineOrBlockDefaultProps('legal'),
}

export default Legal
