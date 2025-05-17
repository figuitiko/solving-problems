const dailyTemperatures = (temperatures) => {
  const res = new Array(temperatures.length).fill(0)
  const stack = [] // pair: [temp, index]

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i]
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [_, stackInd] = stack.pop()
      res[stackInd] = i - stackInd
    }
    stack.push([t, i])
  }
  return res
}

console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28]))
