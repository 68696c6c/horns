import React from 'react'
import styled, { cx } from 'react-emotion'

const Styled = styled('span')`
  font-size: .8rem;
`

const Disclaimer = ({ className, children }) => <Styled className={cx(className, 'disclaimer')}>{children}</Styled>

export default Disclaimer
