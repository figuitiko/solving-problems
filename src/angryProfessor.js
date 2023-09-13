const angryProfessor = (k, a) => {
  let late = 0
  for (const items of a) {
    if (items <= 0) {
      late++
    }
  }
  console.log('late', late)

  return late >= k ? 'NO' : 'YES'
}

console.log(angryProfessor(3, [-1, -3, 4, 2]))
