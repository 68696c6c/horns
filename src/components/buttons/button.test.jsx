/* global describe, it, expect, beforeAll */
import React from 'react'
import { mount } from 'enzyme'
import theme from '../../themes/base'
import Button from './button'

describe('Button', () => {

  let component = {}
  beforeAll(() => {
    component = mount(<Button theme={theme}>Test</Button>)
  })
  it('should render without errors', () => {
    expect(component).toHaveLength(1)
  })
})
