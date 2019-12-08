import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/themes/base'

// Checks in our src folder for any files with `.stories.jsx` file extension and adds them to storybook
// configure(require.context('../src', true, /\.stories\.jsx$/), module)

// Remove the padding/margin from storybook
const styles = `html, body {margin: 0; padding: 0;}`

// Wraps all of our stories in our ThemeProvider with a theme
const themeProviderDecorator = storyFn => <ThemeProvider theme={theme}><style type="text/css">{styles}</style>{storyFn()}</ThemeProvider>

addDecorator(themeProviderDecorator)

addParameters({
  options: {
    showRoots: true,
  },
});

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
    require.context('../src', true, /\.stories\.jsx$/),
  ],
  module
);
