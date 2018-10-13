import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import { debounce, isUndefined } from '../../utils/utils'

const StyledSlider = styled('div')`
  height: ${({ height }) => height};
`
const StyledSlides = styled('div')`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: ${({ reverse }) => reverse ? 'wrap-reverse' : 'wrap'};
  ${({ vertical }) => vertical ? '' : 'flex-direction: column'};
  .slide {
    transform: ${({ transform }) => transform};
    transition: all ${({ speed }) => speed}ms ease 0s;
  }
`

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSlide: 0,
      height: 0,
      width: 0,
    }

    this.changeSlide = this.changeSlide.bind(this)
    this.setDimensions = this.setDimensions.bind(this)
    this.getTransform = this.getTransform.bind(this)

    this.sliderRef = React.createRef()
    this.vertical = props.direction === 'up' || props.direction === 'down'
    this.reverse = props.direction === 'down' || props.direction === 'right'
    this.animationSpeed = isUndefined(props.animationSpeed) ? props.speed * 233 : props.animationSpeed
  }

  componentWillMount() {
    this.setDimensionsDebounced = debounce(() => {
      this.setDimensions.apply(this)
    }, 600)
  }

  componentDidMount() {
    const delay = this.props.speed * 1000
    this.interval = setInterval(() => this.changeSlide(), delay)
    window.addEventListener('resize', this.setDimensionsDebounced)
    this.setDimensions()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  changeSlide() {
    const next = this.state.activeSlide + 1
    const activeSlide = next >= this.props.children.length ? 0 : next
    this.setState(() => ({ activeSlide }))
  }

  setDimensions() {
    const height = this.sliderRef.current.clientHeight
    const width = this.sliderRef.current.clientWidth
    this.setState(() => ({ height, width }))
  }

  getTransform() {
    const { direction } = this.props
    const { activeSlide, height, width } = this.state
    const n = direction === 'up' || direction === 'left' ? -1 : 1
    if (direction === 'up' || direction === 'down') {
      const offset = height * activeSlide * n
      return `translate3d(0px, ${offset}px, 0px)`
    } else {
      const offset = width * activeSlide * n
      return `translate3d(${offset}px, 0px, 0px)`
    }
  }

  render() {
    const { className, children, ...others } = this.props
    return (
      <StyledSlider innerRef={this.sliderRef} className={cx('slider', className)} {...others}>
        <StyledSlides
          transform={this.getTransform()}
          vertical={this.vertical}
          reverse={this.reverse}
          speed={this.animationSpeed}
        >
          {children}
        </StyledSlides>
      </StyledSlider>
    )
  }
}

Slider.propTypes = {
  speed: PropTypes.number,
  animationSpeed: PropTypes.number,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  height: PropTypes.string,
}

Slider.defaultProps = {
  speed: 5,
  direction: 'left',
  height: '400px',
}

export default Slider