import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Container, Padded } from '../../../utils'

const fixedCSS = () =>
  css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  `

export const Header = styled.header(
  Container,
  Padded,
  Colorway,
  ({ theme, breakpoint, stuck }) => {
    console.log('header', theme)
    const minWidth = theme.grid.getBreakpoint(breakpoint)
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${stuck ? fixedCSS() : ''};
      @media (max-width: ${minWidth}) {
        nav .nav-item-menu {
          position: static;
        }
        .nav-item-menu-items {
          width: 100%;
        }
      }
      .nav.mobile {
        margin-left: -1em;
        margin-right: -1em;
      }
    `
  }
)
