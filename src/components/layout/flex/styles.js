import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  Colorway,
  ColorwayBordered,
  Bordered,
  Flex,
  Padded,
  Sizeable,
} from '../../../utils'

export const Box = styled.div(
  ColorwayBordered,
  Bordered,
  Flex,
  Padded,
  Sizeable
)

export const ButtonContainer = styled.div(
  Colorway,
  Flex,
  Padded,
  ({ theme, breakpoint, spacing, x }) => {
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    const margin = theme.spacing.getSpacing(spacing)
    let childStyles = css`
      margin-right: ${margin};
      &:last-child {
        margin-right: 0;
      }
    `
    if (x === 'left') {
      childStyles = css`
        margin-left: ${margin};
        &:first-child {
          margin-left: 0;
        }
      `
    }

    return css`
      display: block;
      > * {
        width: 100%;
        margin-bottom: ${margin};
      }
      @media (min-width: ${minWidth}) {
        display: flex;
        > * {
          width: auto;
          margin-bottom: 0;
          ${childStyles}
        }
      }
    `
  }
)
