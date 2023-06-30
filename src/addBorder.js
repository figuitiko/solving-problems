const addBorder = (picture) => {
  const borderPicture = picture.map(item => '*' + item + '*')
  const border = new Array(borderPicture[0].length).fill('*').join('')
  return [border, ...borderPicture, border]
}

console.log(addBorder(['abc', 'ded']))
