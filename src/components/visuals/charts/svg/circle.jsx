import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { rgb } from '../../../../themes/utils'

const VARIANT_NONE = 'none'

const SVGCircle = styled('circle')`
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke: ${({ theme, stroke }) => stroke === VARIANT_NONE ? stroke : rgb(theme.colors[stroke].default)};
  fill: ${({ theme, fill }) => fill === VARIANT_NONE ? fill : rgb(theme.colors[fill].default)};
`

SVGCircle.propTypes = {
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
  fill: PropTypes.oneOf([
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

SVGCircle.defaultProps = {
  strokeWidth: 0,
  stroke: VARIANT_NONE,
  fill: VARIANT_NONE,
}

export default SVGCircle
