import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import theme from './themes/base'

const App = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App

injectGlobal`
  .react-live > div > div > div > div:first-child {
    background: white;
    color: black;
  }
`
