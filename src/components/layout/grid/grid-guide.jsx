/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'

const Styled = styled('div')`
  width: ${({ theme }) => theme.breakpoints.max};
  margin: auto;
  background: orange;
  height: 50px;
`

export const GridGuide = (props) => <Styled {...props} />

export default GridGuide
