import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Footer from './footer'

export default { title: 'Footer', decorators: [withKnobs] }

export const example = () => (
  <Footer
    textAlign={select('Text Alignment', {
      left: 'left',
      center: 'center',
      right: 'right',
    })}
    colorway={select('colorway', {
      default: '',
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      light: 'light',
      neutral: 'neutral',
      dark: 'dark',
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger',
    })}
  >
    <h1>{text('content', 'Footer')}</h1>
  </Footer>
)
