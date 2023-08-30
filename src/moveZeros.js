const moveZeros = (arr) => {
  const arrWithZeros = arr.filter(item => item === 0)
  const arrWithoutZeros = arr.filter(item => item !== 0)
  return [...arrWithoutZeros, ...arrWithZeros]
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
