import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ColorwayInteractive, Padded, Clickable, Roundable } from '../../utils'

const ButtonBase = ({ theme }) => {
  return css`
    display: inline-block;
    text-align: center;
    font-weight: ${theme.buttons.fontWeight};
    padding: ${theme.buttons.padding};
  `
}

export const Button = styled.button(
  ColorwayInteractive,
  Padded,
  Clickable,
  Roundable,
  ButtonBase
)
