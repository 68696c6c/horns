import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Container, Padded } from '../../utils'

const Layout = ({ textAlign }) => css`
  text-align: ${textAlign};
  overflow: auto;
`

export const Footer = styled.footer(Container, Padded, Colorway, Layout)
export const Header = styled.header(Container, Padded, Colorway, Layout)
export const Section = styled.section(Container, Padded, Colorway, Layout)
