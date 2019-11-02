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
