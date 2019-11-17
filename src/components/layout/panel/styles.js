import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Container, Padded } from '../../../utils'

// @TODO add more props.
export const Panel = styled.section(
  Container,
  Padded,
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.getSpacing('small')};
  `
)

export const TitleBar = styled.header(Container, Padded, Colorway)

export const Body = styled.div()
