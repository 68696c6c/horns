import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const fontStyles = ['normal', 'italic', 'oblique', 'initial', 'inherit']

export const Font = ({ style, variant, weight, size, height, family }) => css`
  font-style: ${style};
  font-variant: ${variant};
  font-weight: ${weight};
  font-size: ${size};
  line-height: ${height};
  font-family: ${family};
`

export const FontStyle = ({ theme, style }) => css`
  font-style: ${style};
`

export const fontStylePropTypes = () => ({
  style: PropTypes.oneOf(fontStyles),
})

export const fontStyleDefaultProps = (style = 'normal') => ({ style })

export const fontPropTypes = () => ({
  style: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  family: PropTypes.string,
})

export const fontDefaultProps = (height = 'auto', width = 'auto') => ({
  height,
  width,
})
