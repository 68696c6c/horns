import { css } from '@emotion/core'
import { typographyColor } from '../../utils'

const baseHeading = (size, margin, theme, variant) =>
  css`
    font-size: ${size};
    margin: ${margin};
    ${typographyColor(theme, variant)};
  `

export default baseHeading
