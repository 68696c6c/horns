import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palletColorShades } from '../config'

export const colorwayPropTypes = () => ({
  colorway: PropTypes.oneOf(palletColorShades),
})

export const colorwayDefaultProps = (colorway = '') => ({ colorway })

export const Colorway = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
  `
}

export const ColorwayBordered = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    border-color: ${cw.border};
  `
}

export const ColorwayInteractive = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
    border-color: ${cw.border};
    &:hover {
      background: ${cw.hover};
      color: ${cw.hoverReadable};
      border-color: ${cw.hoverBorder};
    }
    &:active {
      background: ${cw.active};
      color: ${cw.activeReadable};
      border-color: ${cw.activeBorder};
    }
  `
}

export const ColorwayText = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    color: ${cw.base};
  `
}

export const ColorwayTextInteractive = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    color: ${cw.base};
    &:hover {
      color: ${cw.hover};
    }
    &:active {
      color: ${cw.active};
    }
  `
}
