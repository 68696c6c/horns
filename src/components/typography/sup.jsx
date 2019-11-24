import React from 'react'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

const Sup = ({ children, ...others }) => (
  <Styled.Sup {...handleProps(others, 'sup')}>{children}</Styled.Sup>
)

Sup.propTypes = {
  ...fontPropTypes(),
}

Sup.defaultProps = {
  ...fontDefaultProps(),
}

export default Sup
