import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../slider/slider'
import GridThirds from '../grid/thirds'
import { breakpoints, heroSecondaryGradient } from '../../styles/theme'
import { css, cx } from 'react-emotion'

export const HeroSecondary = (props) => {
  const bg = css`
    background: ${heroSecondaryGradient}, url(${props.imageMin}) 0 / cover no-repeat;
    @media(min-width: ${breakpoints.medium}) {
      background: ${heroSecondaryGradient}, url(${props.imageMax}) 0 / cover no-repeat;
    }
  `
  return (
    <section className={cx('hero', 'hero-secondary', props.className)}>
      <GridThirds className={cx('hero-content', 'hero-secondary-content')} gap={false} breakPoint="medium">
        <Slider className={cx('hero-left', 'hero-secondary-left')} slides={[props.leftContent]}/>
        <Slider className={cx('hero-right', 'hero-secondary-right', bg)} slides={[props.rightContent]}/>
      </GridThirds>
    </section>
  )
}

HeroSecondary.propTypes = {
  leftContent: PropTypes.object,  // a Slide component
  rightContent: PropTypes.object,  // a Slide component
  imageMin: PropTypes.string.isRequired,
  imageMax: PropTypes.string.isRequired,
}

export default HeroSecondary
