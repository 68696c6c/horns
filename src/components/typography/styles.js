import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { fontDefaultProps, fontPropTypes, Font } from '../../mixins'
import { ERROR_CLASS } from '../forms/utils'

export const TYPOGRAPHY_INLINE = 'inline'
export const TYPOGRAPHY_BLOCK = 'block'

export const inlineOrBlockPropTypes = () => ({
  ...fontPropTypes(),
  variant: PropTypes.oneOf([TYPOGRAPHY_INLINE, TYPOGRAPHY_BLOCK]),
})

export const inlineOrBlockDefaultProps = (
  font = 'text',
  variant = TYPOGRAPHY_INLINE
) => ({
  ...fontDefaultProps(font),
  variant,
})

export const Paragraph = styled.p(
  Font,
  ({ theme }) => css`
    line-height: ${theme.typography.letting.paragraph};
    margin: ${theme.typography.spacing.paragraph};
  `
)
export const Pre = styled.pre(Font)
export const Text = styled.span(Font)

export const Sub = styled.sub(Font)
export const Sup = styled.sup(Font)

export const TextInline = styled.span(Font)
export const TextBlock = styled.p(Font)

export const QuoteInline = styled.q(Font)
export const QuoteBlock = styled.blockquote(Font, ({ theme, spacing }) => {
  return css`
    border-left: 0.25em solid ${theme.colors.copy.base};
    margin: 1em 0 ${theme.spacing.getSpacing(spacing)} 1em;
    padding: 0 0 0 ${theme.spacing.getSpacing(spacing)};
  `
})

// Phrase components.
export const EM = styled.em(Font)
export const Strong = styled.strong(Font)
export const Small = styled.small(Font)
export const Code = styled.code(Font)
export const Samp = styled.samp(Font)
export const KBD = styled.kbd(Font)
export const Var = styled.var(Font)

// Heading components
const BaseHeading = ({ theme, level }) => css`
  font-size: ${theme.typography.getSize(level)};
  line-height: ${theme.typography.letting.heading};
  margin: ${theme.typography.spacing.heading};
`
export const H1 = styled.h1(Font, BaseHeading)
export const H2 = styled.h2(Font, BaseHeading)
export const H3 = styled.h3(Font, BaseHeading)
export const H4 = styled.h4(Font, BaseHeading)
export const H5 = styled.h5(Font, BaseHeading)
export const H6 = styled.h6(Font, BaseHeading)

export const Label = styled.label(
  Font,
  ({ theme, variant, required, spacing }) => {
    const requiredCSS = required
      ? css`
          &::after {
            content: ' *';
          }
        `
      : ''
    let displayCSS
    if (variant === TYPOGRAPHY_BLOCK) {
      displayCSS = css`
        display: block;
        margin: ${theme.spacing.getSpacing(spacing)} 0 0 0;
      `
    } else {
      displayCSS = css`
        display: inline-block;
        margin: ${theme.spacing.getSpacing(spacing)} 0.25em 0 0;
      `
    }
    return css`
      ${displayCSS};
      &.${ERROR_CLASS} {
        color: ${theme.colors.getSwatch('danger')};
      }
      ${requiredCSS}
    `
  }
)
