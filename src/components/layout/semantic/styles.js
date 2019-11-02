import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../../config'
import {
  Colorway,
  Container,
  Padded,
  propTypeChildren,
  colorwayPropTypes,
  colorwayDefaultProps,
  textAlignOptions,
} from '../../../utils'

const Layout = ({ textAlign }) => css`
  text-align: ${textAlign};
  overflow: auto;
`

export const layoutPropTypes = () => ({
  children: propTypeChildren(),
  ...colorwayPropTypes(),
  contained: PropTypes.bool,
  padded: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
  textAlign: PropTypes.oneOf(textAlignOptions),
})

export const layoutDefaultProps = () => ({
  children: null,
  ...colorwayDefaultProps(),
  contained: true,
  padded: true,
  spacing: 'medium',
  textAlign: 'inherit',
})

export const Footer = styled.footer(Container, Padded, Colorway, Layout)
export const Header = styled.header(Container, Padded, Colorway, Layout)
export const Section = styled.section(Container, Padded, Colorway, Layout)
