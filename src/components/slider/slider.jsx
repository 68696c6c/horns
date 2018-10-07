import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'

const StyledSlider = styled('div')`
`
const StyledSlides = styled('div')`
  height: 100%;
  overflow: hidden;
  .slide {
    transform: translate3d(0px, ${({ offset }) => offset}px, 0px);
    transition: all 700ms ease 0s;
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

    this.setDimensions = this.setDimensions.bind(this)

    this.sliderRef = React.createRef()
  }

  changeSlide() {
    const next = this.state.activeSlide + 1
    const activeSlide = next >= this.props.children.length ? 0 : next
    this.setState(() => ({ activeSlide }))
  }

  componentDidMount() {
    const delay = this.props.speed * 1000
    this.interval = setInterval(() => this.changeSlide(), delay)
    window.addEventListener('resize', this.setDimensions)
    this.setDimensions()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setDimensions() {
    const height = this.sliderRef.current.clientHeight
    const width = this.sliderRef.current.clientWidth
    this.setState(() => ({ height, width }))
  }

  render() {
    const { className, children, ...others } = this.props
    const { activeSlide, height } = this.state
    const offset = height * activeSlide * -1
    return (
      <StyledSlider innerRef={this.sliderRef} className={cx('slider', className)} {...others}>
        <StyledSlides className="slides" offset={offset}>
          {children}
        </StyledSlides>
      </StyledSlider>
    )
  }
}

Slider.propTypes = {
  slides: PropTypes.array,
  speed: PropTypes.number,
}

Slider.defaultProps = {
  speed: 5,
}

export default Slider
