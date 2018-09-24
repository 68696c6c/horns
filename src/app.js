import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import { createStore } from 'redux'
import reducer from './store/reducers'
import theme from './themes/base'

const store = createStore(reducer)

const App = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
)

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
