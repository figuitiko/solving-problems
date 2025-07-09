const validStartingCity = (distances, fuel, mpg) => {
  const numberOfCities = distances.length
  for (let i = 0; i < numberOfCities; i++) {
    let milesRemaining = 0
    for (let j = i; j < i + numberOfCities; j++) {
      if (milesRemaining < 0) {
        continue
      }
      const currentCityIdx = j % numberOfCities
      const fuelFromCurrentCity = fuel[currentCityIdx]
      const distanceToNextCity = distances[currentCityIdx]
      milesRemaining += fuelFromCurrentCity * mpg - distanceToNextCity
    }
    if (milesRemaining >= 0) {
      return i
    }
  }
  return -1
}
console.log(validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10))

const validStartingCity1 = (distances, fuel, mpg) => {
  const numberOfCities = distances.length
  let milesRemaining = 0
  let indexOfStartingCityCandidate = 0
  let milesRemainingAtStartingCityCandidate = 0
  for (let i = 1; i < numberOfCities; i++) {
    const distanceFromPreviousCity = distances[i - 1]
    const fuelFromPreviousCity = fuel[i - 1]
    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity
    if (milesRemaining < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaining
      indexOfStartingCityCandidate = i
    }
  }
  return indexOfStartingCityCandidate
}

console.log(validStartingCity1([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10))
