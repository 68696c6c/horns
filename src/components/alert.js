import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

export class Alert extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const visible = this.props.shown ? '' : css`display: none;`
    const style = css`
      min-height: 64px;
      box-sizing: border-box;
      margin-bottom: 1rem;
      padding: 8px;
      border-radius: 1px;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 15px 0 rgba(0, 0, 0, .05);
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-height: 800px;
      overflow: hidden;
      ${visible};
    `
    return (
      <div className={cx('alert', style, this.props.type)}>
        {this.props.children}
      </div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  shown: PropTypes.bool,
}

Alert.defaultProps = {
  type: 'default',
  shown: true,
}

export default Alert
