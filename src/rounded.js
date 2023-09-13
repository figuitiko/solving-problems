const gradingStudents = (grades) => {
  const result = grades.map(grade => {
    if (grade < 38) {
      return grade
    }
    const integerDiv = Math.floor(grade / 5)
    const nextDiv = integerDiv * 5 + 5
    if ((nextDiv - grade) < 3) {
      return nextDiv
    }
    return grade
  })
  return result
}

module.exports = gradingStudents
