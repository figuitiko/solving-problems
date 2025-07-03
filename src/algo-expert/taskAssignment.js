const taskAssignment = (k, tasks) => {
  const sortedTasks = [...tasks].sort((a, b) => a - b)
  const map = {}
  tasks.forEach((item, idx) => {
    if (!map[item]) {
      map[item] = [idx]
    } else {
      map[item].push(idx)
    }
  })
  let left = 0
  let right = tasks.length - 1
  const res = []
  while (left < right) {
    const leftVal = sortedTasks[left]
    const rightVal = sortedTasks[right]
    const leftRes = map[leftVal].shift()
    const rightRes = map[rightVal].shift()
    res.push([leftRes, rightRes])
    left++
    right--
  }
  return res
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]))
