import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './item'
import BrandLettermark from '../../../components/brand/lettermark'
import BrandWordmark from '../../../components/brand/wordmark'
import { cx } from 'react-emotion'

export const NavBrand = (props) => {
  if (props.collapsed) {
    return (
      <NavItem href={props.href} className={cx('brand-lettermark', props.className)}>
        <BrandLettermark/>
        <span className={cx('tagline')}>Lost.Stolen.Damaged.</span>
      </NavItem>
    )
  } else {
    return (
      <NavItem href={props.href} className={cx('brand-wordmark', props.className)}>
        <BrandWordmark/>
      </NavItem>
    )
  }
}

NavBrand.propTypes = {
  href: PropTypes.string,
  collapsed: PropTypes.bool,
}

export default NavBrand
