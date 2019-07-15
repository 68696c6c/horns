import Color from 'color'
import { css } from '@emotion/core'
import { isUndefined } from '../utils/utils'

export const pallet = {
  violet: Color('#7f00ff'),
  indigo: Color('#3f00ff'),
  blue: Color('#1a99ff'),
  green: Color('#00aa33'),
  yellow: Color('#f6d500'),
  orange: Color('#ff9900'),
  red: Color('#ff3600'),
  white: Color('#ffffff'),
  gray: {
    lightest: Color('#fafafa'),
    light: Color('#cccccc'),
    medium: Color('#999999'),
    dark: Color('#666666'),
    darkest: Color('#231f20'),
  },
  black: Color('#000000'),
}

/**
 * Return a Color object as an RGB string.
 * @param {Object} c - Color from 'color'
 * @returns {string}
 */
export const rgb = (c) => {
  return c.rgb().string()
}

/**
 * Return a CSS property value as a unit-less integer.
 * @param cssVal
 * @returns {*}
 */
export const valueToInt = (cssVal) => {
  return cssVal.replace('px', '').replace('rem', '').replace('em', '').replace('vw', '').replace('vh', '')
}

/**
 * Return an Emotion CSS snippet that applies the provided link or button config styles to an element.
 * Supports background, color, decoration, and border properties.
 * @param config - link or button object from the theme
 * @returns SerializedStyles
 */
export const hoverStates = config => {
  const bgDef = isUndefined(config.background) ? '' : `background-color: ${rgb(config.background)}`
  const bgHover = isUndefined(config.hover.background) ? '' : `background-color: ${rgb(config.hover.background)}`
  const bgActive = isUndefined(config.active.background) ? '' : `background-color: ${rgb(config.active.background)}`

  const decDef = isUndefined(config.decoration) ? '' : `text-decoration: ${config.decoration}`
  const decHover = isUndefined(config.hover.decoration) ? '' : `text-decoration: ${config.hover.decoration}`
  const decActive = isUndefined(config.active.decoration) ? '' : `text-decoration: ${config.active.decoration}`

  const borderDef = isUndefined(config.border) ? '' : `${config.border}`
  const borderHover = isUndefined(config.hover.border) ? '' : `${config.hover.border}`
  const borderActive = isUndefined(config.active.border) ? '' : `${config.active.border}`

  return css`
    ${bgDef};
    color: ${rgb(config.color)};
    ${decDef};
    ${borderDef};

    &:hover {
      cursor: pointer;
      color: ${rgb(config.hover.color)};
      ${bgHover};
      ${decHover};
      ${borderHover};
    }

    &:active {
      cursor: pointer;
      color: ${rgb(config.active.color)};
      ${bgActive};
      ${decActive};
      ${borderActive};
    }
  `
}

/**
 * Return an Emotion CSS snippet that applies the provided button config styles to an element.
 * @param config - button object from the theme
 * @returns SerializedStyles
 */
export const buttonStates = config => {
  return css`
    border-radius: ${config.radius};
    ${hoverStates(config)};
  `
}
