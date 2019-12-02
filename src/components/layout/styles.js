import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  Colorway,
  Container,
  Padded,
  Layout,
  Font,
  BaseHeading,
} from '../../mixins'

export const Footer = styled.footer(Container, Padded, Colorway, Layout)
export const Header = styled.header(Container, Padded, Colorway, Layout)
export const Section = styled.section(Container, Padded, Colorway, Layout)

export const FormGroupInline = styled.div(({ theme, breakpoint, spacing }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  const space = theme.spacing.getSpacing(spacing)
  return css`
    margin-top: ${space};
    @media (min-width: ${minWidth}) {
      display: grid;
      grid-auto-columns: 1fr;
      column-gap: ${space};
    }
  `
})

export const FormGroupField = styled.div(({ theme, breakpoint }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    grid-row: 2;
    input:not([type='checkbox']):not([type='radio']):not([type='submit']),
    textarea {
      width: 100%;
    }
    label {
      margin-top: 0;
    }
    @media (min-width: ${minWidth}) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      input:not([type='checkbox']):not([type='radio']):not([type='submit']),
      textarea,
      .select-custom-container {
        margin-bottom: 0;
      }
    }
  `
})

export const FormGroupHeading = styled.label(
  Font,
  BaseHeading,
  ({ end }) => css`
    grid-column-end: span ${end};
    grid-row: 1;
  `
)
FormGroupHeading.defaultProps = { level: 'h6', font: 'heading' }

export const FormGroupVerticalContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
