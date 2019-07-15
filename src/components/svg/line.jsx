/** @jsx jsx */
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { rgb } from '../../themes/utils'

const VARIANT_NONE = 'none'

const SVGLine = styled('line')`
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke: ${({ theme, stroke }) => stroke === VARIANT_NONE ? stroke : rgb(theme.colors[stroke].default)};
`

SVGLine.propTypes = {
  strokeWidth: PropTypes.number,
  stroke: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'background',
    'copy',
    VARIANT_NONE,
  ]),
}

SVGLine.defaultProps = {
  strokeWidth: 1,
  stroke: VARIANT_NONE,
}

export default SVGLine
