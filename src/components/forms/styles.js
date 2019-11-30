import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { ColorwayText, Font } from '../../mixins'

export const InputMessage = styled.label(Font, ColorwayText, ({ theme }) => {
  return css`
    display: block;
    margin: -${theme.spacing.getSpacing('tiny')} 0 0 0;
  `
})
