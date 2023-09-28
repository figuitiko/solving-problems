const willYou = (young, beautiful, loved) => {
  if (young && beautiful && !loved) return true
  if (loved && (!young || !beautiful)) return true
  return false
}
console.log(willYou(true, true, true))
console.log(willYou(true, false, true))
console.log(willYou(false, false, false))
