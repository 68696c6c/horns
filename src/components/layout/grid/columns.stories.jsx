/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import Columns from './columns'
import Area from './area'

export default {
  title: 'Columns',
  parameters: {
    component: Columns,
  },
  decorators: [withKnobs],
}

export const example = () => (
  <>
    <Columns
      colorway="primary"
      contained={boolean('contained', true)}
      columns={select('columns', { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }, 1)}
    >
      <Area colorway="secondary-lighter">One</Area>
      <Area colorway="secondary-light">Two</Area>
      <Area colorway="secondary">Three</Area>
      <Area colorway="secondary-dark">Four</Area>
      <Area colorway="secondary-darker">Five</Area>
    </Columns>
  </>
)

export const test = () => (
  <Columns>
    <Area>hi</Area>
  </Columns>
)
