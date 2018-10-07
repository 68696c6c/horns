import React from 'react'
import styled, { cx } from 'react-emotion'

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
  <Styled className={cx('image-frame', className)} {...others}>{children}</Styled>
)

export default ImageFrame
