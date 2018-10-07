import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'

const Styled = styled('img')`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
`

// Docz's PropsTable doesn't recognize props defined on higher-order components, so this base component is exported for
// that purpose.  This component should NOT be exported for use outside this app since it requires the Emotion withTheme
// HOC in order to function correctly.
export const PictureBase = ({ alt, srcMin, srcMax, maxWidth, breakpoint, theme, ...others }) => (
  <picture {...others}>
    <source media={`(min-width: ${theme.breakpoints[breakpoint]})`} srcSet={srcMax} />
    <Styled src={srcMin} alt={alt} maxWidth={maxWidth} />
  </picture>
)

PictureBase.propTypes = {
  alt: PropTypes.string,
  srcMin: PropTypes.string.isRequired,
  srcMax: PropTypes.string,
  maxWidth: PropTypes.string,
  breakpoint: PropTypes.string,
}

PictureBase.defaultProps = {
  maxWidth: 'initial',
  breakpoint: 'medium',
}

export default withTheme(PictureBase)
