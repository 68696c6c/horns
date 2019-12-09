import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  Colorway,
  Container,
  Padded,
  Layout,
  Font,
  BaseHeading,
  InputWrapper,
  Roundable,
  BorderedElement,
} from '../../mixins'

export const Footer = styled.footer(Container, Padded, Colorway, Layout)
export const Header = styled.header(Container, Padded, Colorway, Layout)
export const Section = styled.section(Container, Padded, Colorway, Layout)

export const Group = styled.div(InputWrapper, ({ theme, spacing }) => {
  const space = theme.spacing.getSpacing(spacing)
  return css`
    margin-top: ${space};
    .toggle-container {
      margin-bottom: ${theme.spacing.getSpacing('xxSmall')};
    }
  `
})

export const GroupInline = styled.div(({ theme, breakpoint, spacing }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  const space = theme.spacing.getSpacing(spacing)
  return css`
    margin-top: ${space};
    .toggle-container {
      margin-bottom: ${theme.spacing.getSpacing('xxSmall')};
    }
    @media (min-width: ${minWidth}) {
      display: grid;
      grid-auto-columns: 1fr;
      column-gap: ${space};
    }
  `
})

export const GroupField = styled.div(InputWrapper, ({ theme, breakpoint }) => {
  const minWidth = theme.grid.getBreakpoint(breakpoint)
  return css`
    grid-row: 2;
    @media (min-width: ${minWidth}) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      input:not([type='checkbox']):not([type='radio']):not([type='submit']),
      textarea,
      .select-custom-container,
      .toggle-container {
        margin-bottom: 0;
      }
    }
  `
})

export const GroupHeading = styled.label(
  Font,
  BaseHeading,
  ({ end }) => css`
    ${end && `grid-column-end: span ${end}`};
    grid-row: 1;
  `
)
GroupHeading.defaultProps = { level: 'h6', font: 'heading' }

export const GroupVerticalContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const Fieldset = styled.fieldset(
  Roundable,
  Padded,
  BorderedElement,
  InputWrapper,
  ({ theme }) => css`
    border-color: ${theme.colors.background.tertiary};
    padding-bottom: 0;
  `
)

export const Legend = styled.legend(
  Font,
  BaseHeading,
  ({ theme, spacing }) => css`
    margin-top: ${theme.spacing.getSpacing(spacing)};
    margin-bottom: 0;
  `
)
Legend.defaultProps = { level: 'h5', font: 'heading' }
