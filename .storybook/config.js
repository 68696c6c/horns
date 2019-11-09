import React from 'react'
import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/themes/base'

// Checks in our src folder for any files with `.stories.jsx` file extension and adds them to storybook
configure(require.context('../src', true, /\.stories\.jsx$/), module)

// Wraps all of our stories in our ThemeProvider with a theme
const themeProviderDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
addDecorator(themeProviderDecorator)