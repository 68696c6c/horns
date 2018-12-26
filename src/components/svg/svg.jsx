import React from 'react'
import styled, { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

const getVariantFillCSS = (name, color) => (
  css`
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
)

const getSVGFillCSS = theme => (
  css`
    fill: ${rgb(theme.colors.copy.default)};
    .light {
      fill: ${rgb(theme.colors.copy.light)};
    }
    .dark {
      fill: ${rgb(theme.colors.copy.dark)};
    }
    ${getVariantFillCSS('primary', theme.colors.primary)};
    ${getVariantFillCSS('secondary', theme.colors.secondary)};
    ${getVariantFillCSS('tertiary', theme.colors.tertiary)};
    ${getVariantFillCSS('light', theme.colors.light)};
    ${getVariantFillCSS('neutral', theme.colors.neutral)};
    ${getVariantFillCSS('dark', theme.colors.dark)};
    ${getVariantFillCSS('success', theme.colors.success)};
    ${getVariantFillCSS('info', theme.colors.info)};
    ${getVariantFillCSS('warning', theme.colors.warning)};
    ${getVariantFillCSS('danger', theme.colors.danger)};
    ${getVariantFillCSS('background', theme.colors.background)};
`
)

const StyledSVG = styled('svg')`${({ theme }) => getSVGFillCSS(theme)}`

const SVG = ({ children, ...others }) => <StyledSVG {...others}>{children}</StyledSVG>

export default SVG
