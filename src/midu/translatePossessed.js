const translatePossessed = (message) => {
  if (message.trim() === '') {
    return ''
  }
  const msgArr = message.split(' ').map(item => item.split('').reverse().join('')).join(' ')
  console.log(msgArr)
}
console.log(translatePossessed('siht si gnorw'))
