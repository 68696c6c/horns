import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Container, Padded, Shadowed } from '../../../mixins'

// @TODO add more props.
export const PanelSection = styled.section(Container)

export const Panel = styled.div(Shadowed, ({ theme, spacing }) => {
  const space = theme.spacing.getSpacing(spacing)
  return css`
    margin-bottom: ${space};
    > * {
      padding: ${space};
    }
  `
})

export const TitleBar = styled.header(Container, Padded, Colorway, () => {
  return css`
    .heading {
      margin: 0;
    }
  `
})

export const Body = styled.div(Colorway)
