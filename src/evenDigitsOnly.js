const evenDigitsOnly = (n) => {
  return n.toString().split('').every(item => item % 2 === 0)
}

console.log(evenDigitsOnly(248622))
