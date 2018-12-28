import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import uuid from 'uuid/v4'
import { SliderArrowBack, SliderArrowNext, StyledSliderNav, StyledSliderNavItem } from './nav'
import { debounce, isUndefined } from '../../utils/utils'
import SlideFade from './slide-fade'

const getBannerPositionCSS = position => {
  switch (position) {
    case 'top':
      return 'top: 1em;'
    case 'center':
      return 'margin: auto; top: 0; left: 0; bottom: 0; right: 0;'
    case 'bottom':
      return 'bottom: 2em;'
  }
}

const StyledSlider = styled('div')`
  height: ${({ height }) => height};
  position: relative;
`
const StyledSlidesTransform = styled('div')`
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
const StyledSlidesFade = styled('div')`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-areas: "content";
`
const StyledBanner = styled('div')`
  position: absolute;
  width: 100%;
  ${({ position }) => getBannerPositionCSS(position)};
`

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSlide: 0,
      height: 0,
      width: 0,
    }

    this.log = this.log.bind(this)
    this.setInterval = this.setInterval.bind(this)
    this.changeSlide = this.changeSlide.bind(this)
    this.setDimensions = this.setDimensions.bind(this)
    this.getTransform = this.getTransform.bind(this)
    this.setActiveSlide = this.setActiveSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)

    this.slideCount = props.children.length
    this.sliderRef = React.createRef()
    this.bannerRef = React.createRef()
    this.vertical = props.direction === 'up' || props.direction === 'down'
    this.reverse = props.direction === 'down' || props.direction === 'right'
    this.animationSpeed = isUndefined(props.animationSpeed) ? props.speed * 233 : props.animationSpeed

    this.slideIDs = props.children.map(() => {
      return uuid()
    })
  }

  componentWillMount() {
    this.setDimensionsDebounced = debounce(() => {
      this.setDimensions.apply(this)
    }, 600)
  }

  componentDidMount() {
    this.setInterval()
    window.addEventListener('resize', this.setDimensionsDebounced)
    this.setDimensions()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  log(...messages) {
    if (this.props.debug) {
      console.log('[SLIDER DEBUG] ', messages)
    }
  }

  setInterval() {
    const { speed } = this.props
    if (speed > 0) {
      this.interval = setInterval(() => this.changeSlide(), speed * 1000)
    }
  }

  changeSlide() {
    const next = this.state.activeSlide + 1
    const activeSlide = next >= this.props.children.length ? 0 : next
    this.setState(() => ({ activeSlide }))
  }

  setDimensions() {
    if (this.bannerRef.current !== null) {
      const bannerHeight = this.bannerRef.current.children[0].clientHeight
      this.bannerRef.current.style.height = `${bannerHeight}px`
    }
    const height = this.sliderRef.current.clientHeight
    let width = this.sliderRef.current.clientWidth
    if (!this.props.padded) {
      const ns = window.getComputedStyle(this.sliderRef.current)
      width = width - parseFloat(ns.getPropertyValue('padding-left')) - parseFloat(ns.getPropertyValue('padding-right'))
    }
    this.log('setDimensions', height, width)
    this.setState(() => ({ height, width }))
  }

  getTransform() {
    const { direction } = this.props
    const { activeSlide, height, width } = this.state
    const n = direction === 'up' || direction === 'left' ? -1 : 1
    this.log('getTransform', direction, activeSlide, height, width)
    if (direction === 'up' || direction === 'down') {
      const offset = height * activeSlide * n
      return `translate3d(0px, ${offset}px, 0px)`
    } else {
      const offset = width * activeSlide * n
      return `translate3d(${offset}px, 0px, 0px)`
    }
  }

  setActiveSlide(event) {
    const activeSlide = parseInt(event.target.dataset.index)
    clearInterval(this.interval)
    this.setState(() => ({ activeSlide }), this.setInterval)
  }

  previousSlide() {
    const { activeSlide: currentSlide } = this.state
    const activeSlide = currentSlide === 0 ? this.slideCount - 1 : currentSlide - 1
    clearInterval(this.interval)
    this.setState(() => ({ activeSlide }), this.setInterval)
  }

  nextSlide() {
    const { activeSlide: currentSlide } = this.state
    const activeSlide = currentSlide === this.slideCount - 1 ? 0 : currentSlide + 1
    clearInterval(this.interval)
    this.setState(() => ({ activeSlide }), this.setInterval)
  }

  render() {
    const { arrows, animation, banner, bannerPosition, nav, speed, className, children, ...others } = this.props
    const { activeSlide } = this.state
    return (
      <StyledSlider innerRef={this.sliderRef} className={cx('slider', className)} {...others}>
        {animation === 'slide' && (
          <StyledSlidesTransform
            className="slides"
            transform={this.getTransform()}
            vertical={this.vertical}
            reverse={this.reverse}
            speed={this.animationSpeed}
          >
            {children}
          </StyledSlidesTransform>
        )}
        {animation === 'fade' && (
          <StyledSlidesFade
            className="slides"
            vertical={this.vertical}
            reverse={this.reverse}
          >
            {children.map(({ props }, index) => (
              <SlideFade
                {...props}
                speed={this.animationSpeed}
                className={cx(props.className, activeSlide === index ? 'active' : '')}
                key={this.slideIDs[index]}
              />
            ))}
          </StyledSlidesFade>
        )}
        {nav && (
          <StyledSliderNav>
            {children.map((child, index) => (
              <StyledSliderNavItem
                data-index={index}
                onClick={this.setActiveSlide}
                active={index === activeSlide}
                key={uuid()}
              />
            ))}
          </StyledSliderNav>
        )}
        {banner && <StyledBanner innerRef={this.bannerRef} position={bannerPosition}>{banner}</StyledBanner>}
        {arrows && (
          <React.Fragment>
            <SliderArrowBack onClick={this.previousSlide}/>
            <SliderArrowNext onClick={this.nextSlide}/>
          </React.Fragment>
        )}
      </StyledSlider>
    )
  }
}

Slider.propTypes = {
  debug: PropTypes.bool,
  speed: PropTypes.number,
  animation: PropTypes.oneOf(['slide', 'fade']),
  animationSpeed: PropTypes.number,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  height: PropTypes.string,
  padded: PropTypes.bool,
  nav: PropTypes.bool,
  banner: PropTypes.element,
  bannerPosition: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
  arrows: PropTypes.bool,
}

Slider.defaultProps = {
  debug: false,
  speed: 5,
  animation: 'slide',
  direction: 'left',
  height: '400px',
  padded: true,
  nav: true,
  bannerPosition: 'center',
  arrows: true,
}

export default Slider
