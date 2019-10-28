/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Colorway, Flex } from '../../../utils'

export const Box = styled.div(
  Colorway,
  Flex,
  ({ theme, height, width }) => css`
    height: ${height};
    width: ${width};
    padding: ${theme.spacing.getSpacing('small')};
  `
)
