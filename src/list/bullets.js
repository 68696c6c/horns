import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'react-emotion'

export const ListBullets = (props) => {
  const style = css`
    list-style-type: none;
    > li::before {
      content: "●";
      display: inline-block;
      width: 1rem;
      margin-left: -1rem;
    }
    > li {
      padding-left: 1rem;
    }
  `
  return (
    <ul className={cx('bullets', style, props.className)}>
      {props.children}
    </ul>
  )
}

ListBullets.propTypes = {
  bullet: PropTypes.string,
}

export default ListBullets
