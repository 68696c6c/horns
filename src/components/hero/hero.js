import React from 'react'
import PropTypes from 'prop-types'
import Banner from './banner'
import Slider from '../slider/slider'
import GridThirds from '../grid/thirds'
import IconKlaimIt from '../../components/brand/klaim-it'
import { cx } from 'react-emotion'

export const Hero = (props) => {
  return (
    <section className={cx('hero', 'hero-primary', props.className)}>
      <GridThirds className={cx('hero-content', 'hero-primary-content')} gap={false} breakPoint="medium">
        <Slider className={cx('hero-left', 'hero-primary-left')} slides={props.leftSlides}/>
        <Slider className={cx('hero-right', 'hero-primary-right')} slides={props.rightSlides}>
          <Banner className={cx('hero-primary-banner')}>
            {props.banner}
            <IconKlaimIt className={cx('small')}/>
          </Banner>
        </Slider>
      </GridThirds>
    </section>
  )
}

Hero.propTypes = {
  leftSlides: PropTypes.array,
  rightSlides: PropTypes.array,
  banner: PropTypes.object,
}

export default Hero
