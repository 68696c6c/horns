import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import { handleProps, themeDefaultProps, themePropTypes } from '../../mixins'
import * as Styled from './styles'

// This component should NOT be exported for use outside this app since it requires the Emotion withTheme HOC in order
// to function correctly.
export const PictureBase = ({
  alt,
  srcMin,
  srcMax,
  maxWidth,
  breakpoint,
  theme,
  ...others
}) => (
  <picture {...handleProps(others, 'picture')}>
    <source
      media={`(min-width: ${theme.grid.getBreakpoint(breakpoint)})`}
      srcSet={srcMax === '' ? srcMin : srcMax}
    />
    <Styled.Image src={srcMin} alt={alt} maxWidth={maxWidth} />
  </picture>
)

PictureBase.propTypes = {
  ...themePropTypes(),
  alt: PropTypes.string,
  srcMin: PropTypes.string.isRequired,
  srcMax: PropTypes.string,
  maxWidth: PropTypes.string,
  breakpoint: PropTypes.string,
}

PictureBase.defaultProps = {
  ...themeDefaultProps(),
  alt: '',
  srcMax: '',
  maxWidth: 'initial',
  breakpoint: 'medium',
}

export default withTheme(PictureBase)
