import React from 'react'
import styled from 'react-emotion'

const Styled = styled('div')`
  width: ${({ theme }) => theme.breakpoints.max};
  margin: auto;
  background: orange;
  height: 50px;
`

export const GridGuide = (props) => <Styled {...props} />

export default GridGuide
