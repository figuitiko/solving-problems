const lateRide = (n) => {
  if (n < 60) {
    return n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
  }
  const rest = n % 60
  const entireDiv = Math.floor(n / 60)
  return `${entireDiv}${rest}`.split('').reduce((acc, curr) => acc + Number(curr), 0)
}

console.log(lateRide(240))
