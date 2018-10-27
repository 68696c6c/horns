/* global describe, it, expect, beforeAll */
import React from 'react'
import { mount } from 'enzyme'
import { randomString } from '../../../test/utils'
import theme from '../../themes/base'
import SliderDouble from './double'

describe('SliderDouble', () => {

  jest.mock('./slider', () => <div />)
  jest.mock('./slide', () => <div />)

  let component = {}
  beforeAll(() => {
    component = mount(
      <SliderDouble
        theme={theme}
        leftSlides={[
          <div key={randomString()} />
        ]}
        rightSlides={[
          <div key={randomString()} />
        ]}
      />
    )
  })

  it('should render without errors', () => {
    expect(component).toHaveLength(1)
  })
})
