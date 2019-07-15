/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { baseNotification } from './base'

const Styled = styled('div')`
  display: ${({ visible }) => visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 1px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 15px 0 rgba(0, 0, 0, .05);
  max-height: 800px;
  overflow: hidden;
  ${({ theme, variant }) => baseNotification(theme, variant)};
`

const Alert = ({ variant, visible, className, children, ...others }) => (
  <Styled variant={variant} visible={visible} className={('alert', className)} {...others}>
    {children}
  </Styled>
)

Alert.propTypes = {
  variant: PropTypes.string,
  visible: PropTypes.bool,
}

Alert.defaultProps = {
  variant: 'success',
  visible: true,
}

export default Alert
