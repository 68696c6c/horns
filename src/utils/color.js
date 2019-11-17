import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palletColorShades } from '../config'

export const Colorway = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
  `
}

export const ColorwayInteractive = ({ theme, colorway }) => {
  const cw = theme.colorsInteractive.getColorway(colorway)
  return css`
    background: ${cw.background};
    color: ${cw.color};
    border-color: ${cw.border};
    text-decoration: ${cw.decoration};
    &:hover {
      background: ${cw.hover.background};
      color: ${cw.hover.color};
      border-color: ${cw.hover.border};
      text-decoration: ${cw.hover.decoration};
    }
    &:active {
      background: ${cw.active.background};
      color: ${cw.active.color};
      border-color: ${cw.active.border};
      text-decoration: ${cw.active.decoration};
    }
  `
}

export const colorwayPropTypes = () => ({
  colorway: PropTypes.oneOf(palletColorShades),
})

export const colorwayDefaultProps = () => ({
  colorway: '',
})

export const ColorwayText = ({ theme, colorway }) => {
  const cw = theme.colors.getShade(colorway)
  return css`
    color: ${cw.base};
  `
}

export const ColorwayTextInteractive = ({ theme, colorway }) => {
  const cw = theme.colorsTextInteractive.getColorway(colorway)
  console.log('ColorwayTextInteractive', colorway, cw)
  return css`
    color: ${cw.color};
    &:hover {
      color: ${cw.hover.color};
    }
    &:active {
      color: ${cw.active.color};
    }
  `
}

export const colorwayTextPropTypes = () => ({
  colorway: PropTypes.oneOf([...palletColorShades, 'copy']),
})

export const colorwayTextDefaultProps = () => ({
  colorway: 'copy',
})
