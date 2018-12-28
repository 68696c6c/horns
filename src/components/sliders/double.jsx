import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../layout/grid'
import Slider from './slider'

const SliderDouble = ({
                        debug,
                        height,
                        leftAnimation,
                        rightAnimation,
                        leftPadded,
                        rightPadded,
                        leftSlides,
                        rightSlides,
                        speed,
                        animationSpeed,
                        leftDirection,
                        rightDirection,
                        bannerLeft,
                        bannerLeftPosition,
                        bannerRight,
                        bannerRightPosition,
                        ...others,
                      }) => (
  <Grid gap={false} fluid={true} {...others}>
    <Slider
      debug={debug}
      className="slider-left"
      speed={speed}
      animationSpeed={animationSpeed}
      animation={leftAnimation}
      direction={leftDirection}
      height={height}
      padded={leftPadded}
      nav={false}
      banner={bannerLeft}
      bannerPosition={bannerLeftPosition}
      arrows={false}
    >
      {leftSlides}
    </Slider>
    <Slider
      debug={debug}
      className="slider-right"
      speed={speed}
      animationSpeed={animationSpeed}
      animation={rightAnimation}
      direction={rightDirection}
      height={height}
      padded={rightPadded}
      nav={false}
      banner={bannerRight}
      bannerPosition={bannerRightPosition}
      arrows={false}
    >
      {rightSlides}
    </Slider>
  </Grid>
)

SliderDouble.propTypes = {
  debug: PropTypes.bool,
  leftSlides: PropTypes.array.isRequired,
  rightSlides: PropTypes.array.isRequired,
  speed: PropTypes.number,
  animationSpeed: PropTypes.number,
  leftAnimation: PropTypes.oneOf(['slide', 'fade']),
  rightAnimation: PropTypes.oneOf(['slide', 'fade']),
  leftDirection: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  rightDirection: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  variant: PropTypes.oneOf(['equal', 'thirds']),
  side: PropTypes.string,
  height: PropTypes.string,
  leftPadded: PropTypes.bool,
  rightPadded: PropTypes.bool,
  bannerLeft: PropTypes.element,
  bannerLeftPosition: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
  bannerRight: PropTypes.element,
  bannerRightPosition: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
}

SliderDouble.defaultProps = {
  debug: false,
  speed: 5,
  leftAnimation: 'slide',
  rightAnimation: 'slide',
  leftDirection: 'right',
  rightDirection: 'left',
  variant: 'equal',
  side: 'left',
  leftPadded: true,
  rightPadded: true,
  bannerLeftPosition: 'center',
  bannerRightPosition: 'center',
}

export default SliderDouble
