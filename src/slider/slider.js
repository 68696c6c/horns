import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeSlideIndex: 0 }
  }

  changeSlide() {
    this.setState(prevState => ({
      activeSlideIndex: prevState.activeSlideIndex + 1 >= this.props.slides.length ? 0 : prevState.activeSlideIndex + 1,
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeSlide(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const slidesStyle = css`height: 100%;`
    return (
      <div className={cx('slider', this.props.className)}>
        <div className={cx('slides', slidesStyle)}>
          {this.props.slides[this.state.activeSlideIndex]}
        </div>
        {this.props.children}
      </div>
    )
  }
}

Slider.propTypes = {
  slides: PropTypes.array,
}
