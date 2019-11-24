import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { fontStyles } from '../config'
import { childrenTextDefaultProps, childrenTextPropTypes } from './component'
import { isUndefined } from '../utils'

export const fontPropTypes = () => ({
  ...childrenTextPropTypes(),
  font: PropTypes.oneOf(fontStyles),
})

export const fontDefaultProps = (font = 'text') => ({
  ...childrenTextDefaultProps(),
  font,
})

export const Font = ({ theme, font }) => {
  const style = theme.typography.getStyle(font)
  return css`
    font-family: ${style.family};
    font-style: ${style.style};
    font-weight: ${style.weight};
    font-variant: ${style.variant};
    font-size: ${style.size};
    line-height: ${theme.typography.letting.base};
    text-align: ${style.align};
    margin: ${theme.typography.spacing.base};
    ${
      style.align === 'justify'
        ? css`
            text-justify: ${style.justify};
          `
        : ''
    }
    text-decoration: ${style.decoration};
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
