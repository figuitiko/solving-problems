// Define a validator function
const validator = (name, validationFunction) => ({
  name,
  validate: validationFunction,
  next: null
})
const validatorsToCheck = {
  string: 'It is a valid string',
  email: 'It is a valid email',
  number: 'It is a valid number'
}

// Create the chain of validators
const stringValidator = validator('String validator', (value) => {
  if (typeof value !== 'string') {
    throw new Error('Value must be a string')
  }
  return validatorsToCheck.string
})
const emailValidator = validator('Email validator', (value) => {
  if (typeof value !== 'string') {
    throw new Error('Value must be a string')
  }
  if (!value.includes('@')) {
    throw new Error('Value must be an email address')
  }
  return validatorsToCheck.email
})
const numberValidator = validator('Number validator', (value) => {
  if (typeof value !== 'number') {
    throw new Error('Value must be a number')
  }
  return validatorsToCheck.number
})

// Link the validators together
stringValidator.next = emailValidator
emailValidator.next = numberValidator

const arrError = []
// Define a function to execute the chain of validators
const validateValue = (value) => {
  let currentValidator = stringValidator
  while (currentValidator) {
    try {
      const validator = currentValidator.validate(value)
      arrError.push(validator)
    } catch (error) {
      console.error(`Validation error in ${currentValidator.name}: ${error.message}`)
      arrError.push(false)
    }
    currentValidator = currentValidator.next
  }
  const arrResult = arrError.filter(item => item !== false)
  if (arrResult.length === 0) {
    console.log('everything is valid')
    return 'everything is valid'
  }
  console.log({ arrResult })
  return arrResult
}

// Test the validators
validateValue('hello') // Error: Value must be an email address
validateValue('hello@world.com') // Error: Value must be a number
validateValue(42) // Value is valid!
