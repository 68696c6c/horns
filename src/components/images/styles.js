import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
  picture {
    margin: 0.5em;
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

export const Image = styled.img(
  ({ maxWidth }) => css`
    width: 100%;
    max-width: ${maxWidth};
  `
)
