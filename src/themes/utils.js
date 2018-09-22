import Color from 'color'

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
