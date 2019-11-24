import React from 'react'

import { handleProps, paddedDefaultProps, paddedPropTypes } from '../../mixins'
import * as Styled from './styles'

const Quote = ({ children, variant, ...others }) => {
  const props = others
  let Tag = Styled.QuoteInline
  if (variant === 'block') {
    Tag = Styled.QuoteBlock
  }
  return <Tag {...handleProps(props, 'quote')}>{children}</Tag>
}

Quote.propTypes = {
  ...Styled.inlineOrBlockPropTypes(),
  ...paddedPropTypes(),
}

Quote.defaultProps = {
  ...Styled.inlineOrBlockDefaultProps('quote'),
  ...paddedDefaultProps('small'),
}

export default Quote
