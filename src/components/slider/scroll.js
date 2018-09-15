import React from 'react'
import PropTypes from 'prop-types'
import OverScroll from 'gatsby-over-scroll'
import { css, cx } from 'react-emotion'

export const SliderScroll = (props) => {
  const length = props.children.length
  const factor = props.speed || 1
  return (
    <OverScroll className={cx('slider-scroll')} slides={length} factor={factor}>
      {(page, progress) => {
        const beforeStart = page === 0 && progress === 0
        const afterEnd = (page + 1) === length && progress >= 100
        const scrollProgressStyle = beforeStart || afterEnd ? css`display: none;` : ''
        return (
          <div>
            <div className={cx('scroll-content')}>
              {props.children[page]}
            </div>
            <div className={cx('scroll-progress', scrollProgressStyle)}>
              <div className={cx('scroll-progress-bar')}>
                <div className={cx('scroll-progress-bar-fill')} style={{ width: `${progress}%` }}/>
              </div>
            </div>
          </div>
        )
      }}
    </OverScroll>
  )
}

SliderScroll.propTypes = {
  speed: PropTypes.number,
}

export default SliderScroll
