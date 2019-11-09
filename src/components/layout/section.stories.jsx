import React from 'react'

// Import the theme
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import Section from './section'

export default { title: 'Section', decorators: [withKnobs] }

export const example = () => (
  <>
    <Section
      colorway={select('colorway', {
        warning: 'warning',
        danger: 'danger',
        info: 'info',
      })}
      contained={boolean('contained', false)}
      padded={boolean('padded', true)}
    >
      <p>
        {text(
          'content',
          'These Sections have had their padding highlighted to illustrate how the padding works.'
        )}
      </p>
    </Section>
  </>
)

// Knobs for React props
// export const withAButton = () => (
//   <button disabled={boolean('Disabled', false)}>
//     {text('Label', 'Hello Storybook')}
//   </button>
// )
