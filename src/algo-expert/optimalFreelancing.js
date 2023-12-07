const optimalFreelancing = (jobs) => {
  let max = 0
  const deadlineArr = [...new Set(jobs.map(item => item.deadline))]
  for (const deadlineVal of deadlineArr) {
    max += Math.max(...jobs.reduce((acc, curr) => {
      if (curr.deadline === deadlineVal) {
        acc.push(curr.payment)
      }
      return acc
    }, []))
  }
  return max
}

// const jobs = [
//   { deadline: 1, payment: 1 },
//   { deadline: 2, payment: 1 },
//   { deadline: 2, payment: 2 }
// ]
const jobs1 = [
  {
    deadline: 8,
    payment: 3
  },
  {
    deadline: 1,
    payment: 1
  },
  {
    deadline: 1,
    payment: 2
  }
]

// console.log(optimalFreelancing(jobs))
console.log(optimalFreelancing(jobs1))

const jobs2 = [
  {
    deadline: 2,
    payment: 1
  },
  {
    deadline: 2,
    payment: 2
  },
  {
    deadline: 2,
    payment: 3
  },
  {
    deadline: 2,
    payment: 4
  },
  {
    deadline: 2,
    payment: 5
  },
  {
    deadline: 2,
    payment: 6
  },
  {
    deadline: 2,
    payment: 7
  }
]

console.log(optimalFreelancing(jobs2))

const optimalFreelancing1 = (jobs) => {
  const LEGTH_OF_WEEK = 7
  let profift = 0
  jobs.sort((a, b) => {
    return b.payment - a.payment
  })
  const timeLine = Array(LEGTH_OF_WEEK).fill(false)
  for (const job of jobs) {
    const maxTime = Math.min(job.deadline, LEGTH_OF_WEEK)
    for (let i = maxTime; i > 0; i--) {
      if (!timeLine[i]) {
        timeLine[i] = true
        profift += job.payment
        break
      }
    }
  }
  return profift
}
console.log(optimalFreelancing1(jobs2))
