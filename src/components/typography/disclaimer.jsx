/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'

const Styled = styled('span')`
  font-size: .8rem;
`

const Disclaimer = ({ className, children }) => <Styled className={(className, 'disclaimer')}>{children}</Styled>

export default Disclaimer
