import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import theme from './themes/base'

const App = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
