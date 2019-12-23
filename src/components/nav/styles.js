import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway } from '../../mixins'

// eslint-disable-next-line import/prefer-default-export
export const Nav = styled.nav(Colorway, ({ theme }) => {
  const style = theme.typography.getStyle('link')
  return css`
    .mobile > .nav-item {
      display: flex;
      svg {
        height: ${style.letting};
        width: ${style.letting};
      }
    }
    > .nav-item-menu > .menu-container > .menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
    }
  `
})
