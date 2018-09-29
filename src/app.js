import React from 'react'
import PropTypes from 'prop-types'
// const path = require('path')
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import theme from './themes/base'

// let location = process.env.LOCATION || 'dev'
// let processEnv = path.resolve(__dirname, 'environment', location + '.js')

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
