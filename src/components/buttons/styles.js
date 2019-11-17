import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  ColorwayInteractive,
  Clickable,
  Roundable,
  Bordered,
} from '../../utils'

export const buttonStyles = [
  ColorwayInteractive,
  Clickable,
  Roundable,
  Bordered,
  ({ theme }) => css`
    display: inline-block;
    text-align: center;
    font-weight: ${theme.buttons.fontWeight};
    padding: ${theme.buttons.padding};
  `,
]

export const Button = styled.button(...buttonStyles)
