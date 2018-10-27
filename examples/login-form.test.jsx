/* global describe, it, expect, beforeAll */
import React from 'react'
import { mount } from 'enzyme'
import LoginForm from './login-form'

// jest.mock('./inputs/input')
// jest.mock('../buttons/button')
// jest.mock('./field')

jest.mock('../src', () => {
  return {
    Button: 'button',
    Input: 'input',
    Field: 'field',
  }
})

describe('Form', () => {

  const initialState = {
    fields: {
      email: {
        value: '',
        required: true,
        hasError: false,
      },
      password: {
        value: '',
        required: true,
        hasError: false,
      },
    },
    rules: [],
  }
  const component = mount(<LoginForm/>)

  beforeAll(() => {
    component.setState(initialState)
  })

  it('should mount without throwing errors', () => {
    expect(component).toHaveLength(1)
  })

  it('should have email and password inputs', () => {
    expect(component.find('input')).toHaveLength(2)
  })

  it('should have a submit button', () => {
    expect(component.find('button')).toHaveLength(1)
  })

  describe('when the form is submitted with empty fields', () => {
    it('it should require an email', () => {
      component.simulate('submit')
      const state = component.state()
      expect(state.fields.email.hasError).toEqual(true)
    })
    it('it should require a password', () => {
      component.simulate('submit')
      const state = component.state()
      expect(state.fields.password.hasError).toEqual(true)
    })
  })
})
