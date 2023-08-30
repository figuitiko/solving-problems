const wrappingGifts = (gifts) => {
  return gifts.map(item => {
    const aster = '*'.repeat(item.length + 1)
    return aster + '\n*' + item + '*\n' + aster
  })
}

console.log(wrappingGifts(['cat', 'game', 'socks']))
