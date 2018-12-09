// Simple form validation class.
export class Validator {
  constructor() {
    this.OPERATOR_AND = 'AND'
    this.OPERATOR_OR = 'OR'
    this.OPERATOR_NOT = 'NOT'
  }

  makeField(required, value = '') {
    return {
      required,
      value,
      hasError: false,
    }
  }

  makeRule(field, value, condition) {
    return {
      field,
      value,
      condition,
    }
  }

  makeCondition(operator, fields) {
    return {
      operator,
      fields,
    }
  }

  allOf(fields = []) {
    return this.makeCondition(this.OPERATOR_AND, fields)
  }

  oneOf(fields = []) {
    return this.makeCondition(this.OPERATOR_OR, fields)
  }

  noneOf(fields = []) {
    return this.makeCondition(this.OPERATOR_NOT, fields)
  }

  ruleRequireAll(field, value, required = []) {
    return this.makeRule(field, value, this.allOf(...required))
  }

  ruleRequireOne(field, value, required = []) {
    return this.makeRule(field, value, this.oneOf(...required))
  }
}

export function getValidator() {
  return new Validator()
}
