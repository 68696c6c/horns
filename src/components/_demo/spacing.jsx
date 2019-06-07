import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../..'
import Box from '../layout/box'
import { diagonalLinesCSS, textShadow } from '../utils'
import uuid from 'uuid/v4'

const StyledSpacingDemo = styled('div')`
`

const Spacing = () => (
  <StyledSpacingDemo>
    <Box/>
    <Box/>
    <Box/>
  </StyledSpacingDemo>
)

export default Spacing
