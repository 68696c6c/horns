import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Container, Padded } from '../../../mixins'

// @TODO add more props.
export const Panel = styled.section(Container, ({ theme, spacing }) => {
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
    > * {
      margin: 0;
    }
  `
})

export const Body = styled.div()
