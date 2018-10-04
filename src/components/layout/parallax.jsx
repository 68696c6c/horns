import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const StyledBackground = styled('div')`
  position: relative;
  background-image: ${({ background }) => `url(${background})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: ${({ minHeight }) => minHeight};
`
const StyledContent = styled('article')`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
`

export const Parallax = ({ fluid, padded, variant, className, children, ...others }) => (
  <StyledBackground fluid={fluid} className={className} {...others}>
    <StyledContent>
      {children}
    </StyledContent>
  </StyledBackground>
)

Parallax.propTypes = {
  background: PropTypes.string.isRequired,
  minHeight: PropTypes.string,
}

Parallax.defaultProps = {
  minHeight: '400px',
}

export default Parallax
