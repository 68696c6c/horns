import React from 'react'
import { css, cx } from 'react-emotion'

export const ListNone = (props) => {
  const style = css`list-style-type: none;`
  return (
    <ul className={cx('none', style, props.className)}>
      {props.children}
    </ul>
  )
}

export default ListNone
