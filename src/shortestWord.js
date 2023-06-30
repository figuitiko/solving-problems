const shortestWord = (s) => {
  const sArr = s.split(' ').map(item => item.length)
  return Math.min(...sArr)
}

console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'))
