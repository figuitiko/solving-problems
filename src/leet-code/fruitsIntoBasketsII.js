const fruitsIntoBasketsII = (fruits, baskets) => {
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        baskets.splice(j, 1)
        break
      }
    }
  }
  return baskets.length
}

console.log(fruitsIntoBasketsII([4, 2, 5], [3, 5, 4]))
