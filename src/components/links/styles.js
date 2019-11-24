import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {
  ColorwayTextInteractive,
  Clickable,
  Decoratable,
  childrenTextPropTypes,
  childrenTextDefaultProps,
  colorwayPropTypes,
  colorwayDefaultProps,
  fontDefaultProps,
  fontPropTypes,
} from '../../mixins'
import { buttonStyles } from '../buttons/styles'

export const Link = styled.a(ColorwayTextInteractive, Clickable, Decoratable)

export const LinkButton = styled.a(...buttonStyles)

export const linkPropTypes = () => ({
  ...childrenTextPropTypes(),
  ...colorwayPropTypes(),
  ...fontPropTypes(),
  variant: PropTypes.oneOf(['link', 'button']),
})

export const linkDefaultProps = () => ({
  ...childrenTextDefaultProps(),
  ...colorwayDefaultProps('prominent'),
  ...fontDefaultProps('link'),
  variant: 'link',
})
