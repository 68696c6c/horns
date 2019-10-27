/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'

import { Box } from '../layout'

const StyledSpacingDemo = styled('div')``

const Spacing = () => (
  <StyledSpacingDemo>
    <Box />
    <Box />
    <Box />
  </StyledSpacingDemo>
)

export default Spacing
