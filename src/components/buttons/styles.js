import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
  ColorwayInteractiveBordered,
  Clickable,
  Roundable,
  BorderedElement,
  Font,
} from '../../mixins'

export const buttonStyles = [
  ColorwayInteractiveBordered,
  Clickable,
  Roundable,
  BorderedElement,
  Font,
  ({ theme }) => css`
    display: inline-block;
    text-align: center;
    padding: ${theme.buttons.padding};
  `,
]

export const Button = styled.button(...buttonStyles)
