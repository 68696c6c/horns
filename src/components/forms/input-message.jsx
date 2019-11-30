import React from 'react'
import PropTypes from 'prop-types'

import {
  fontPropTypes,
  fontDefaultProps,
  colorwayPropTypes,
  colorwayDefaultProps,
  handleProps,
} from '../../mixins'
import * as Styled from './styles'

const InputMessage = ({ htmlFor, children, ...others }) => (
  <Styled.InputMessage
    htmlFor={htmlFor}
    {...handleProps(others, 'input-message')}
  >
    {children}
  </Styled.InputMessage>
)

InputMessage.propTypes = {
  ...fontPropTypes(),
  ...colorwayPropTypes(),
  htmlFor: PropTypes.string,
}

InputMessage.defaultProps = {
  ...fontDefaultProps('message'),
  ...colorwayDefaultProps(),
  htmlFor: '',
}

export default InputMessage
