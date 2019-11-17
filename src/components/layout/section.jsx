import React from 'react'

import { handleProps, layoutPropTypes, layoutDefaultProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Section = ({ children, ...others }) => (
  <Styled.Section {...handleProps(others)}>{children}</Styled.Section>
)

Section.propTypes = layoutPropTypes()

Section.defaultProps = layoutDefaultProps()

export default Section
