import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { css, Global } from '@emotion/core'
import theme from './themes/base'

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
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
