import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  ColorwayInteractive,
  Clickable,
  Roundable,
  Bordered,
  Font,
} from '../../mixins'

export const buttonStyles = [
  ColorwayInteractive,
  Clickable,
  Roundable,
  Bordered,
  Font,
  ({ theme }) => css`
    display: inline-block;
    text-align: center;
    padding: ${theme.buttons.padding};
  `,
]

export const Button = styled.button(...buttonStyles)
