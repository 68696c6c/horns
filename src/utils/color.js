import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palletColorShades } from '../config'

export const colorwayPropTypes = () => ({
  colorway: PropTypes.oneOf(palletColorShades),
})

export const colorwayDefaultProps = () => ({
  colorway: '',
})

export const Colorway = ({ theme, colorway }) => {
  console.log('Colorway', colorway, theme)
  const cw = theme.colors.getShade(colorway)
  return css`
    background: ${cw.base};
    color: ${cw.readable};
  `
}

export const ColorwayInteractive = ({ theme, colorway }) => {
  const c = theme.colorsInteractive.getColorway(colorway)
  console.log('ColorwayInteractive', colorway, c)
  return css`
    background: ${c.background};
    color: ${c.color};
    border-color: ${c.border};
    text-decoration: ${c.decoration};
    &:hover {
      background: ${c.hover.background};
      color: ${c.hover.color};
      border-color: ${c.hover.border};
      text-decoration: ${c.hover.decoration};
    }
    &:active {
      background: ${c.active.background};
      color: ${c.active.color};
      border-color: ${c.active.border};
      text-decoration: ${c.active.decoration};
    }
  `
}
