/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colorwayCSS, flexCSS } from '../../../utils'

export const Box = styled.div(
  ({ theme, colorway, height, width, x, y }) => css`
    ${colorwayCSS(theme, colorway)};
    ${flexCSS(x, y)};
    height: ${height};
    width: ${width};
    padding: ${theme.spacing.small};
  `
)
