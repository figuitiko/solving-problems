const tripleNestedX = (n, ch1, ch2, ch3) => {
  let spaceAmount = n
  let beforSpace = 0
  let afterSpace = 0
  let amountOfCharacters = 3
  for (let i = 0; i < n; i++) {
    if (spaceAmount !== 0) {
      console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch3}${' '.repeat(spaceAmount)}${ch3}${ch2}${ch1}${' '.repeat(afterSpace)}`)
    } else {
      if (amountOfCharacters === 3) {
        console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch3}${ch2}${ch1}${' '.repeat(afterSpace)}`)
      }
      if (amountOfCharacters === 2) {
        console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch1}${' '.repeat(afterSpace)}`)
      }
      if (amountOfCharacters === 1) {
        console.log(`${' '.repeat(beforSpace)}${ch1}${' '.repeat(afterSpace)}`)
      }
      amountOfCharacters--
    }
    spaceAmount = (spaceAmount - 2) > 0 ? spaceAmount - 2 : 0
    beforSpace++
    afterSpace++
    // console.log(spaceAmount, beforSpace)
  }
  spaceAmount = 0
  beforSpace -= 2
  afterSpace -= 2
  // console.log(beforSpace)
  for (let i = 0; i < n - 1; i++) {
    if (spaceAmount < 2) {
      if (spaceAmount === 0) {
        console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch1}${' '.repeat(afterSpace)}`)
      }
      if (spaceAmount === 1) {
        console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch3}${ch2}${ch1}${' '.repeat(afterSpace)}`)
      }
      spaceAmount = spaceAmount + 1
    } else {
      console.log(`${' '.repeat(beforSpace)}${ch1}${ch2}${ch3}${' '.repeat(spaceAmount)}${ch3}${ch2}${ch1}${' '.repeat(afterSpace)}`)
      spaceAmount = spaceAmount + 2
    }
    beforSpace = (beforSpace - 1) > 0 ? beforSpace - 1 : 0
    afterSpace = (afterSpace - 1) > 0 ? afterSpace - 1 : 0
  }
}
tripleNestedX(12, '#', '%', '*')
