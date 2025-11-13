const countSheep = (letters) => {
  const map = {}
  let count = 0
  for (const char of letters) {
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char] = map[char] + 1
    }
  }
  // console.log(map)

  while (map.s && map.e >= 2 && map.h && map.p) {
    if (map.e >= 2) {
      count++
    }
    map.s = map.s - 1
    map.e = map.e - 2
    map.h = map.h - 1
    map.p = map.p - 1
  }
  return count
}
// console.log(countSheep('sheepxsheepy'))
console.log(countSheep('sshhheeeepppp'))
console.log(countSheep('ssshhheeeppp'))
