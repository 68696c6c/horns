import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {
  ColorwayTextInteractive,
  Clickable,
  Decoratable,
  childrenTextPropTypes,
  colorwayTextPropTypes, childrenTextDefaultProps, colorwayTextDefaultProps
} from '../../utils'
import { buttonStyles } from '../buttons/styles'

export const Link = styled.a(ColorwayTextInteractive, Clickable, Decoratable)

export const LinkButton = styled.a(...buttonStyles)

export const linkPropTypes = () => ({
  ...childrenTextPropTypes(),
  ...colorwayTextPropTypes(),
  variant: PropTypes.oneOf(['link', 'button']),
})

export const linkDefaultProps = () => ({
  ...childrenTextDefaultProps(),
  ...colorwayTextDefaultProps(),
  variant: 'link',
})
