import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../slider/slider'
import GridThirds from '../grid/thirds'
import { cx } from 'react-emotion'

export const HeroTertiary = (props) => {
  return (
    <section className={cx('hero', 'hero-tertiary', props.className)}>
      <GridThirds className={cx('hero-content', 'hero-tertiary-content')} gap={false} breakPoint="medium">
        <Slider className={cx('hero-left', 'hero-tertiary-left')} slides={props.leftSlides}/>
        <Slider className={cx('hero-right', 'hero-tertiary-right')} slides={props.rightSlides}/>
      </GridThirds>
    </section>
  )
}

HeroTertiary.propTypes = {
  leftSlides: PropTypes.array,
  rightSlides: PropTypes.array,
}

export default HeroTertiary
