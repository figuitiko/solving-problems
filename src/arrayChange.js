function solution (inputArray) {
  let moves = 0

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      moves += inputArray[i - 1] - inputArray[i] + 1
      inputArray[i] = inputArray[i - 1] + 1
    }
  }
  return moves
}

console.log(solution([1, 1, 1]))
