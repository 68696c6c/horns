import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '../styles/theme'
import { css, cx } from 'react-emotion'

export const Picture = (props) => {
  const imgStyle = css`
    width: 100%;
    max-width: ${props.maxWidth || 'initial'};
  `
  const defaultImage = props.image || props.srcMin
  const breakPoint = breakpoints[props.breakPoint]
  return (
    <picture className={cx('picture', props.className)}>
      <source media={`(min-width: ${breakPoint})`} srcSet={props.srcMax}/>
      <img src={defaultImage} alt={props.alt} className={cx('image', imgStyle)}/>
    </picture>
  )
}

Picture.propTypes = {
  alt: PropTypes.string,
  srcMin: PropTypes.string,
  srcMax: PropTypes.string,
  maxWidth: PropTypes.string,
  breakPoint: PropTypes.string,
}

export default Picture
