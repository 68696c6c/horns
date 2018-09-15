import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

const Area = (props) => {
  const style = props.area ? css`grid-area: ${this.props.area};` : ''
  return (
    <div className={cx('area', style, props.className)}>
      {props.children}
    </div>
  )
}

Area.propTypes = {
  area: PropTypes.string,
}

export default Area
