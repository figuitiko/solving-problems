const variableName = (name) => {
  name = name.toLowerCase()
  const digits = '0123456789'
  const alphabet = 'abcdefghijklmnopqrstuvxyz'
  const symbols = '_'

  for (let i = 0; i < name.length; i++) {
    if (!digits.includes(name[i]) && !alphabet.includes(name[i]) && !symbols.includes(name[i])) {
      return false
    }
    if (i === 0 && digits.includes(name[i])) {
      return false
    }
  }
  return true
}

console.log(variableName('var_1_int'))

const solution = (name) => {
  const isValidVariableName = /^[_a-zA-Z][_a-zA-Z0-9]*$/
  return isValidVariableName.test(name)
}

console.log(solution('var_1_int'))
