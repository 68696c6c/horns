import React from 'react'
import PropTypes from 'prop-types'

import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
} from '../../../utils'
import * as Styled from './styles'

const NavItem = ({ href, active, variant, className, children, ...others }) => {
  const cName = active ? 'nav-item active' : 'nav-item'
  return (
    <Styled.NavItemInline
      href={href}
      variant={variant}
      {...handleProps(others, cName)}
    >
      {children}
    </Styled.NavItemInline>
  )
}

NavItem.propTypes = {
  ...colorwayPropTypes(),
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

NavItem.defaultProps = {
  ...colorwayDefaultProps(),
  active: false,
}

export default NavItem
