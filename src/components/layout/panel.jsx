/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { COLOR_VARIANT_NONE, colorVariantCSS,  } from '../utils'
import TitleBar from './title-bar'

const StyledPanelBody = styled('div')`
  ${({ theme }) => colorVariantCSS(theme, 'background')};
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`

const Panel = ({ title, variant, children }) => (
  <React.Fragment>
    <TitleBar variant={variant}>{title}</TitleBar>
    <StyledPanelBody>{children}</StyledPanelBody>
  </React.Fragment>
)

Panel.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
    'background',
    COLOR_VARIANT_NONE,
  ]),
}

Panel.defaultProps = {
  title: '',
  variant: 'dark',
}

export default Panel
