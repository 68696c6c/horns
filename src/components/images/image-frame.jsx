/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'

const Styled = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
  picture {
    margin: .5em;
    &:first-child {
      margin-left: 1em;
    }
    &:last-child {
      margin-right: 1em;
    }
    img {
      width: 100%;
    }
  }
`

const ImageFrame = ({ className, children, ...others }) => (
  <Styled className={('image-frame', className)} {...others}>{children}</Styled>
)

export default ImageFrame
