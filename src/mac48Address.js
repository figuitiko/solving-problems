const mac48Address = (inputString) => {
  const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  if (macAddressRegex.test(inputString)) return true
  return false
}
