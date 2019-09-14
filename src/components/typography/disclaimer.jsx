/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import { toClassNames } from '../utils'

const Styled = styled('span')`
  font-size: 0.8rem;
`

const Disclaimer = ({ className, children }) => <Styled className={toClassNames(className, 'disclaimer')}>{children}</Styled>

export default Disclaimer
