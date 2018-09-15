import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { cx } from 'react-emotion'

export const NavItem = (props) => {
  // Assume that any internal link (intended for Gatsby) will start with exactly one slash, and that anything else is
  // external.
  const internal = /^\/(?!\/)/.test(props.href)

  // @TODO activeClassName was broken with the addition of Redux.  Not sure how to fix it.
  const activeClass = typeof window !== 'undefined' && window.location.pathname === props.href ? 'active' : ''

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <Link to={props.href} {...props} className={cx('nav-item', props.className, activeClass)}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <a href={props.href} {...props} className={cx('nav-item', props.className, activeClass)}>{props.children}</a>
    )
  }
}

NavItem.propTypes = {
  href: PropTypes.string,
}

export default NavItem
