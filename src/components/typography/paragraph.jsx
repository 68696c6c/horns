import React from 'react'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

const Paragraph = ({ children, ...others }) => (
  <Styled.Paragraph {...handleProps(others, 'paragraph')}>
    {children}
  </Styled.Paragraph>
)

Paragraph.propTypes = {
  ...fontPropTypes(),
}

Paragraph.defaultProps = {
  ...fontDefaultProps(),
}

export default Paragraph
