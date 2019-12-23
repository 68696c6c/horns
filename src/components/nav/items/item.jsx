import React from 'react'
import PropTypes from 'prop-types'

import {
  handleProps,
  colorwayDefaultProps,
  colorwayPropTypes,
  fontPropTypes,
  fontDefaultProps,
  childrenTextDefaultProps,
  childrenTextPropTypes, paddedPropTypes, paddedDefaultProps,
} from '../../../mixins'
import * as Styled from './styles'

const NavItem = ({ href, current, variant, children, ...others }) => {
  let Tag = Styled.NavItemInline
  if (variant === 'stacked') {
    Tag = Styled.NavItemStacked
  }
  return (
    <Tag
      href={href}
      variant={variant}
      current={current}
      {...handleProps(others, `nav-item${current ? ' current' : ''}`)}
    >
      {children}
    </Tag>
  )
}

NavItem.propTypes = {
  ...childrenTextPropTypes(),
  ...colorwayPropTypes(),
  ...fontPropTypes(),
  ...paddedPropTypes(),
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['inline', 'stacked']),
}

NavItem.defaultProps = {
  ...childrenTextDefaultProps(),
  ...colorwayDefaultProps(),
  ...fontDefaultProps('link'),
  ...paddedDefaultProps(),
  current: false,
  variant: 'inline',
}

export default NavItem
