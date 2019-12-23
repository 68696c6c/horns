import styled from '@emotion/styled'

import { ColorwayTextInteractive, Clickable, Font } from '../../mixins'
import { buttonStyles } from '../buttons/styles'

export const Link = styled.a(ColorwayTextInteractive, Clickable, Font)

export const LinkButton = styled.a(...buttonStyles)
