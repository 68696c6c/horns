import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { css, Global } from '@emotion/core'
import { getBaseStyles } from './themes'
import theme from './themes/base'

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${getBaseStyles(theme)}
        [class^='Playground__StyledPreviewWrapper-'] {
          background: white;
          color: black;
        }
      `}
    />
    {children}
  </ThemeProvider>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
