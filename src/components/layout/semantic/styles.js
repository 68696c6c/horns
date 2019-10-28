import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import { palletColorShades, spacingSizes } from '../../../config'
import {
  Colorway,
  Container,
  Padded,
  propTypeChildren,
  textAlignOptions,
} from '../../../utils'

const Layout = ({ textAlign }) => css`
  text-align: ${textAlign};
  overflow: auto;
`

export const layoutPropTypes = () => ({
  children: propTypeChildren(),
  colorway: PropTypes.oneOf(palletColorShades),
  contained: PropTypes.bool,
  padded: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
  textAlign: PropTypes.oneOf(textAlignOptions),
})

export const layoutDefaultProps = () => ({
  children: null,
  colorway: '',
  contained: true,
  padded: true,
  spacing: 'medium',
  textAlign: 'inherit',
})

export const Footer = styled.footer(Container, Padded, Colorway, Layout)
export const Header = styled.header(Container, Padded, Colorway, Layout)
export const Section = styled.section(Container, Padded, Colorway, Layout)
