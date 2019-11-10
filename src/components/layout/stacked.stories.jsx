import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs'
import GridStacked from './stacked'
import { Area } from './grid'

export default { title: 'Stacked', decorators: [withKnobs] }

export const example = () => (
  <GridStacked
    variant={select('variant', {
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
    })}
  >
    <Area>Left</Area>
    <Area>Right</Area>
    <Area>Left</Area>
    <Area>Right</Area>
    <Area>Left</Area>
    <Area>Right</Area>
    <Area>Left</Area>
    <Area>Right</Area>
    <Area>Left</Area>
    <Area>Right</Area>
    <Area>Left</Area>
    <Area>Right</Area>
  </GridStacked>
)
