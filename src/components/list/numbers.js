import React from 'react'
import { css, cx } from 'react-emotion'

export const ListNumbers = (props) => {
  const style = css`
    list-style-type: none;
    counter-reset: li;
    > li::before {
      content: counter(li) ".";
      counter-increment: li;
      display: inline-block;
      width: 2rem;
      margin-left: -2rem;
    }
    > li {
      padding-left: 2rem;
    }
  `
  return (
    <ol className={cx('numbers', style, props.className)}>
      {props.children}
    </ol>
  )
}

export default ListNumbers
