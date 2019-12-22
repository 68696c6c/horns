import styled from '@emotion/styled'

import {
  ColorwayTextInteractive,
  Clickable,
  Decoratable,
  Font,
} from '../../mixins'
import { buttonStyles } from '../buttons/styles'

export const Link = styled.a(
  ColorwayTextInteractive,
  Clickable,
  Decoratable,
  Font
)

export const LinkButton = styled.a(...buttonStyles)
