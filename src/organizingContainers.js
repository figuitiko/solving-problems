/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

const organizingContainers = (container) => {
  // Write your code here

  const containerSize = []
  const ballSize = []

  for (let i = 0; i < container.length; i++) {
    containerSize.push(container[i].reduce((a, b) => a + b, 0))
  }

  for (let i = 0; i < container.length; i++) {
    let sum = 0
    for (let j = 0; j < container.length; j++) {
      sum += container[j][i]
    }
    ballSize.push(sum)
  }

  containerSize.sort((a, b) => a - b)
  ballSize.sort((a, b) => a - b)

  for (let i = 0; i < containerSize.length; i++) {
    if (containerSize[i] !== ballSize[i]) return 'Impossible'
  }

  return 'Possible'
}

// console.log(organizingContainers([[1,4], [2,3]]))
console.log(organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]]))
