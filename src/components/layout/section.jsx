import React from 'react'

import { handleProps } from '../../utils'
import * as Styled from './styles'

// eslint-disable-next-line react/prop-types
const Section = ({ children, ...others }) => (
  <Styled.Section {...handleProps(others)}>{children}</Styled.Section>
)

Section.propTypes = Styled.layoutPropTypes()

Section.defaultProps = Styled.layoutDefaultProps()

export default Section
