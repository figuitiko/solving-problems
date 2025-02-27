const arrayOfProducts = (array) => {
  return array.reduce((acc, _, idx, arr) => {
    const product = arr.reduce((productAcc, productCurr, productIdx) => {
      if (productIdx !== idx) {
        return productAcc * productCurr
      }
      return productAcc
    }, 1)

    return [...acc, product]
  }, [])
}

console.log(arrayOfProducts([5, 1, 4, 2]))

const arrayOfProducts1 = (array) => {
  const products = Array.from({ length: array.length }, (_) => 1)
  let leftProducts = Array.from({ length: array.length }, (_) => 1)
  let rightProducts = Array.from({ length: array.length }, (_) => 1)
  let leftRunningProduct = 1

  leftProducts = array.reduce((acc, curr) => {
    const temp = leftRunningProduct
    leftRunningProduct *= curr
    return [...acc, temp]
  }, [])
  let rightRunningProduct = 1

  rightProducts = array.reduceRight((acc, curr) => {
    const temp = rightRunningProduct
    rightRunningProduct *= curr
    return [temp, ...acc]
  }, [])

  for (let i = 0; i < products.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i]
  }
  return products
}
console.log(arrayOfProducts1([5, 1, 4, 2]))

const arrayOfProducts2 = (array) => {
  let products = Array.from({ length: array.length }, (_) => 1)
  let leftRunningProduct = 1
  products = array.reduce((acc, curr) => {
    const temp = leftRunningProduct
    leftRunningProduct *= curr
    return [...acc, temp]
  }, [])
  let rightRunningProduct = 1
  products = array.reduceRight((acc, curr,
    idx
  ) => {
    const temp = rightRunningProduct * products[idx]

    rightRunningProduct *= curr
    return [temp, ...acc]
  }, [])
  return products
}
console.log(arrayOfProducts2([5, 1, 4, 2]))
