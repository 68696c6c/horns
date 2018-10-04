import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { baseNotification } from './base'

const StyledFlash = styled('div')`
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

const Flash = ({ variant, children, ...others }) => (
  <StyledFlash variant={variant} {...others}>
    <StyledFlashContent>{children}</StyledFlashContent>
    <ProgressBar />
    <StyledCloseButton />
  </StyledFlash>
)

Flash.propTypes = {
  variant: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger',
  ]),
}

Flash.defaultProps = {
  variant: 'success',
}

export default Flash


// <div className="Toastify__toast-container Toastify__toast-container--top-right">
//   <div className="Toastify__toast Toastify__toast--success" style="">
//     <div role="alert" className="Toastify__toast-body">Welcome Aaron!</div>
//     <button className="Toastify__close-button Toastify__close-button--success" type="button" aria-label="close">✖
//     </button>
//     <div className="Toastify__progress-bar Toastify__progress-bar--success"
//          style="animation-duration: 5000ms; animation-play-state: running; opacity: 1;"></div>
//   </div>
// </div>
