const findEmailDomain = (address) => {
  const atPosition = address.lastIndexOf('@')
  return address.slice(atPosition + 1)
}
console.log(findEmailDomain('frankfigao@gmail.com'))
