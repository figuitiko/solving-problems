const timeInWords = (h, m) => {
  const digitsText = {
    0: 'o\' clock',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty'
  }
  const specificCase = {
    15: 'quarter',
    30: 'half',
    45: 'quarter'
  }
  const hourLater = (h + 1) !== 12 ? h + 1 : 12
  const passMinutes = 60 - m
  let result = ''
  if (m > 30 && m < 60) {
    if (m === 45) {
      result = `${specificCase[m.toString()]} to ${digitsText[hourLater.toString()]}`
    } else if (m < 40) {
      result = `${digitsText['20']} ${digitsText[passMinutes.toString()[1]]} minutes to ${digitsText[hourLater]}`
    } else {
      result = `${digitsText[passMinutes.toString()]} minutes to ${digitsText[hourLater]}`
    }
  } else {
    if (m === 30 || m === 15) {
      result = `${specificCase[m.toString()]} past ${digitsText[h]}`
    } else if (m === 0) {
      result = `${digitsText[h]} ${digitsText[m]}`
    } else if (m <= 20) {
      result = `${digitsText[m]} minute${h !== 1 ? 's' : ''} past ${digitsText[h]}`
    } else {
      result = `${digitsText[20]} ${digitsText[m.toString()[1]]} minutes past ${digitsText[h]}`
    }
  }
  return result
}

console.log(timeInWords(5, 40))
console.log(timeInWords(5, 15))
console.log(timeInWords(5, 28))
console.log(timeInWords(5, 0))
console.log(timeInWords(1, 1))
console.log(timeInWords(6, 35))
