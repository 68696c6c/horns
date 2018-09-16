import React from 'react'
import { css, cx } from 'react-emotion'

const Field = (props) => {
  const style = css`grid-row-start: 2;`
  return (
    <div className={cx('field', props.className, style)}>
      {props.children}
    </div>
  )
}

export default Field
