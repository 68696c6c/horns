import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../layout/grid'
import Slider from './slider'

const SliderDouble = ({ height, leftSlides, rightSlides, speed, animationSpeed, leftDirection, rightDirection, ...others }) => (
  <Grid gap={false} fluid={true} {...others}>
    <Slider
      className="slider-left"
      speed={speed}
      animationSpeed={animationSpeed}
      direction={leftDirection}
      height={height}
    >
      {leftSlides}
    </Slider>
    <Slider
      className="slider-right"
      speed={speed}
      animationSpeed={animationSpeed}
      direction={rightDirection}
      height={height}
    >
      {rightSlides}
    </Slider>
  </Grid>
)

SliderDouble.propTypes = {
  leftSlides: PropTypes.array,
  rightSlides: PropTypes.array,
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
}

SliderDouble.defaultProps = {
  speed: 5,
  leftDirection: 'right',
  rightDirection: 'left',
  variant: 'equal',
  side: 'left',
}

export default SliderDouble
