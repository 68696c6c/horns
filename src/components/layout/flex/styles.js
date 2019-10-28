/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Flex, Padded } from '../../../utils'

export const Box = styled.div(
  Colorway,
  Flex,
  Padded,
  ({ height, width }) => css`
    height: ${height};
    width: ${width};
  `
)
