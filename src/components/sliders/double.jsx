import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../layout/grid'
import Slider from './slider'

const SliderDouble = ({
                        debug,
                        height,
                        leftWidthPx,
                        rightWidthPx,
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
      direction={leftDirection}
      height={height}
      widthPx={leftWidthPx}
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
      direction={rightDirection}
      height={height}
      widthPx={rightWidthPx}
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
  leftWidthPx: PropTypes.number,
  rightWidthPx: PropTypes.number,
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
  leftDirection: 'right',
  rightDirection: 'left',
  variant: 'equal',
  side: 'left',
  bannerLeftPosition: 'center',
  bannerRightPosition: 'center',
}

export default SliderDouble
