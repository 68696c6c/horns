import React from 'react'
import { css } from 'react-emotion'
import uuid from 'uuid/v4'
import { isArray, isUndefined } from '../../utils/utils'
import ListItem from './item'

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
]

export const renderItems = (children, variant, type = undefined, icon = undefined) => {
  const childrenArray = isArray(children) ? children : [children]
  return childrenArray.map(child => {
    let props = {
      ...child.props
    }
    if (isUndefined(props.variant)) {
      props.variant = variant
    }
    if (isUndefined(props.type) && !isUndefined(type)) {
      props.type = type
    }
    if (isUndefined(props.icon) && !isUndefined(icon)) {
      props.icon = icon
    }
    return <ListItem {...props} key={uuid()}>{child.props.children}</ListItem>
  })
}

const baseList = () => {
  return css`
    list-style: none inside;
    padding: 0;
    margin: .5rem 0;
    li {
      margin-bottom: .5rem;
    }
    ol, ul {
      margin: 0;
    }
  `
}

export default baseList
