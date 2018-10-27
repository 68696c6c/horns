import React from 'react'
import PropTypes from 'prop-types'
import { getValidator } from '../src/utils/validation'
import { Button, Input, Field } from '../src'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.validator = getValidator()

    this.getFormData = this.getFormData.bind(this)
    this.isValid = this.isValid.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      fields: {
        email: this.validator.makeField(true),
        password: this.validator.makeField(true),
      },
      rules: [],
    }
  }

  getFormData() {
    let data = {}
    for (let name in this.state.fields) {
      data[name] = this.state.fields[name].value
    }
    return data
  }

  isValid() {
    let valid = true
    for (let name in this.state.fields) {
      const field = this.state.fields[name]
      if (field.required && (typeof field.value === 'undefined' || field.value === '')) {
        valid = false
        const newField = {
          value: field.value,
          required: field.required,
          hasError: true,
        }
        this.setState((prevState) => ({
          fields: {
            ...prevState.fields,
            [name]: newField,
          },
        }))
      }
    }
    return valid
  }

  handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.isValid()) {
      const data = this.getFormData()
      this.props.successCallback(data)
    } else {
      this.props.validationErrorCallback()
    }
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const field = {
      value,
      required: this.state.fields[name].required,
      hasError: this.state.fields[name].hasError,
    }
    this.setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: field,
      },
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="example@xzy.com"
          className="secondary"
          required={this.state.fields.email.required}
          hasError={this.state.fields.email.hasError}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="secondary"
          required={this.state.fields.password.required}
          hasError={this.state.fields.password.hasError}
          onChange={this.handleChange}
        />
        <Field className="form-buttons">
          <Button type="submit">Submit</Button>
        </Field>
      </form>
    )
  }
}

LoginForm.propTypes = {
  successCallback: PropTypes.func.isRequired,
  validationErrorCallback: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
  successCallback: () => {},
  validationErrorCallback: () => {},
}

export default LoginForm
