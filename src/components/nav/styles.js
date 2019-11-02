import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Padded } from '../../utils'

export const Nav = styled.nav(({ theme }) => {
  return css`
    .nav-item,
    a {
      // navItemInline(theme)
    }
    > .nav-item-menu {
      display: inline-block;
      > .nav-item-menu-items {
        position: absolute;
        left: 0;
      }
    }
  `
})
