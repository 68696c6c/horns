import React from 'react'
import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

const getVariantFillCSS = (name, color) => {
  return css`
    .${name} {
      fill: ${rgb(color.default)};
    }
    .${name}-light {
      fill: ${rgb(color.light)};
    }
    .${name}-dark {
      fill: ${rgb(color.dark)};
    }
    .${name}-alpha {
      fill: ${rgb(color.alpha)};
    }
  `
}

export const StyledSVG = styled('svg')`
  fill: ${({ theme }) => rgb(theme.colors.copy.default)};
  .light {
    fill: ${({ theme }) => rgb(theme.colors.copy.light)};
  }
  .dark {
    fill: ${({ theme }) => rgb(theme.colors.copy.dark)};
  }
  ${({ theme }) => getVariantFillCSS('primary', theme.colors.primary)};
  ${({ theme }) => getVariantFillCSS('secondary', theme.colors.secondary)};
  ${({ theme }) => getVariantFillCSS('tertiary', theme.colors.tertiary)};
  ${({ theme }) => getVariantFillCSS('light', theme.colors.light)};
  ${({ theme }) => getVariantFillCSS('neutral', theme.colors.neutral)};
  ${({ theme }) => getVariantFillCSS('dark', theme.colors.dark)};
  ${({ theme }) => getVariantFillCSS('success', theme.colors.success)};
  ${({ theme }) => getVariantFillCSS('info', theme.colors.info)};
  ${({ theme }) => getVariantFillCSS('warning', theme.colors.warning)};
  ${({ theme }) => getVariantFillCSS('danger', theme.colors.danger)};
  ${({ theme }) => getVariantFillCSS('background', theme.colors.background)};
`

const SVG = ({ children, ...others }) => (
  <StyledSVG {...others}>{children}</StyledSVG>
)

export default SVG
