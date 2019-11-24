import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, fontPropTypes, fontDefaultProps } from '../../mixins'
import * as Styled from './styles'

const Text = ({ children, variant, ...others }) => {
  const props = others
  let className = variant
  let Tag
  switch (variant) {
    case 'em':
      Tag = Styled.EM
      props.font = 'emphasized'
      break
    case 'strong':
      Tag = Styled.Strong
      props.font = 'strong'
      break
    case 'small':
      Tag = Styled.Small
      props.font = 'small'
      break
    case 'code':
      Tag = Styled.Code
      props.font = 'code'
      break
    case 'samp':
      Tag = Styled.Samp
      props.font = 'code'
      break
    case 'kbd':
      Tag = Styled.KBD
      props.font = 'code'
      break
    case 'var':
      Tag = Styled.Var
      props.font = 'variable'
      break
    default:
      Tag = Styled.Text
      className = 'text'
  }
  return <Tag {...handleProps(props, className)}>{children}</Tag>
}

Text.propTypes = {
  ...fontPropTypes(),
  variant: PropTypes.oneOf([
    'text',
    'em',
    'strong',
    'small',
    'code',
    'samp',
    'kbd',
    'var',
  ]),
}

Text.defaultProps = {
  ...fontDefaultProps(),
  variant: 'text',
}

export default Text
