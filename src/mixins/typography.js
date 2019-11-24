import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { fontStyles } from '../config'
import { isUndefined } from '../utils'

export const fontPropTypes = () => ({
  font: PropTypes.oneOf(fontStyles),
})

export const fontDefaultProps = (font = 'text') => ({ font })

export const Font = ({ theme, font }) => {
  const style = theme.typography.getStyle(font)
  return css`
    font-style: ${style.style};
    font-variant: ${style.variant};
    font-weight: ${style.weight};
    font-size: ${style.size};
    line-height: ${style.height};
    font-family: ${style.family};
    text-decoration: ${style.decoration};
    text-align: ${style.align};
    ${
      style.align === 'justify'
        ? css`
            text-justify: ${style.justify};
          `
        : ''
    }
    ${
      isUndefined(style.hover)
        ? ''
        : css`
            &:hover {
              text-decoration: ${style.hover.decoration};
            }
          `
    }
    ${
      isUndefined(style.active)
        ? ''
        : css`
            &:active {
              text-decoration: ${style.active.decoration};
            }
          `
    }
  `
}
