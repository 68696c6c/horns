import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../layout/grid'
import Slider from './slider'

const SliderDouble = ({
                        height,
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
                        ...others
                      }) => (
  <Grid gap={false} fluid={true} {...others}>
    <Slider
      className="slider-left"
      speed={speed}
      animationSpeed={animationSpeed}
      direction={leftDirection}
      height={height}
      nav={false}
      banner={bannerLeft}
      bannerPosition={bannerLeftPosition}
      arrows={false}
    >
      {leftSlides}
    </Slider>
    <Slider
      className="slider-right"
      speed={speed}
      animationSpeed={animationSpeed}
      direction={rightDirection}
      height={height}
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
  speed: 5,
  leftDirection: 'right',
  rightDirection: 'left',
  variant: 'equal',
  side: 'left',
  bannerLeftPosition: 'center',
  bannerRightPosition: 'center',
}

export default SliderDouble
