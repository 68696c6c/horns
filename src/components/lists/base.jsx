import React from 'react'
import { css } from 'react-emotion'
import { rgb } from '../../themes/utils'

export const COUNTER = 'li'

export const TYPES_ORDERED = [
  'armenian',
  'cjk-ideographic',
  'decimal',
  'decimal-leading-zero',
  'georgian',
  'hebrew',
  'hiragana',
  'hiragana-iroha',
  'katakana',
  'katakana-iroha',
  'lower-alpha',
  'lower-greek',
  'lower-latin',
  'lower-roman',
  'none',
  'upper-alpha',
  'upper-greek',
  'upper-latin',
  'upper-roman',
]

export const TYPES_UNORDERED = [
  'disc',
  'circle',
  'none',
  'square',
  'icon',
]

const liStyle = (content, width, color) => {
  return css`
    padding-left: ${width};
    &::before {
      content: ${content};
      counter-increment: ${COUNTER};
      display: inline-block;
      width: ${width};
      margin-left: -${width};
      color: ${rgb(color)};
      text-align: right;
      margin-right: .5rem;
    }
  `
}

const baseList = (content, width, color) => {
  return css`
    list-style: none inside;
    padding: 0;
    margin: .5rem 0;
    > li {
      ${liStyle(content, width, color)};
    }
    li {
      margin-bottom: .5rem;
    }
    ol, ul {
      margin: 0;
    }
  `
}

export default baseList
