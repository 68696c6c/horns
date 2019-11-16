/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import Grid from './grid'
// import GridGuide from './grid-guide'
import Area from './area'

export default { title: 'Grid', decorators: [withKnobs] }

export const example = () => (
  <>
    <Grid
      colorway={select(
        'colorway',
        {
          default: '',
          primary: 'primary',
          secondary: 'secondary',
        },
        'primary'
      )}
      variant={select('variant', { halves: 'halves', thirds: 'thirds' })}
      contained={boolean('contained', true)}
    >
      <Area colorway="secondary" area="left">
        Left
      </Area>
      <Area colorway="tertiary" area="right">
        Right
      </Area>
    </Grid>
  </>
)