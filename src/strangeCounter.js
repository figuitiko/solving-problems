/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

const strangeCounter = (t) => {
  const valInit = 3
  let time = 1
  let tempVal = val

  while (time < t) {
    if (tempVal > 1) {
      tempVal--
    } else {
      val = val * 2
      tempVal = val
    }
    time++
  }
  return tempVal
}

// eficient val
const strangeCounter1 = (t) => {
  let valInit = 3

  let time = 1

  while (!(t >= time && t < time + valInit)) {
    time = time + valInit
    valInit = valInit * 2
  }
  return (time + valInit - t)
}

console.log(strangeCounter1(4))
console.log(strangeCounter1(15))
