const phoneNumberMnemonics = (phoneNumber) => {
  const phoneMap = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const currentMnomic = Array.from({ length: phoneNumber.length }, () => '0')
  const mnmonicsFound = []

  const phoneNumberMnemonicsHelper = (idx, phoneNumber, currrentMnemonic, mnmonicsFound) => {
    if (idx === phoneNumber.length) {
      const mnemonic = currentMnomic.join('')
      mnmonicsFound.push(mnemonic)
    } else {
      const digit = phoneNumber[idx]
      const letters = phoneMap[digit]
      for (const letter of letters) {
        currentMnomic[idx] = letter
        phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnomic, mnmonicsFound)
      }
    }
  }
  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnomic, mnmonicsFound)
  return mnmonicsFound
}

console.log(phoneNumberMnemonics('1905'))
