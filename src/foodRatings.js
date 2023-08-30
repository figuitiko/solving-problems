// it should return the id of the restaurant with the highest rating if the ratings are equal, return the id of the restaurant with the lowest id give a better solution
const foodRatings = (n, ratings) => {
  const restaurant = {}
  for (let i = 0; i < ratings.length; i++) {
    if (restaurant[ratings[i][0]]) {
      restaurant[ratings[i][0]] += ratings[i][1]
    } else {
      restaurant[ratings[i][0]] = ratings[i][1]
    }
  }
  let maxRating = 0
  let maxId = 0
  for (const key in restaurant) {
    if (restaurant[key] > maxRating) {
      maxRating = restaurant[key]
      maxId = key
    } else if (restaurant[key] === maxRating) {
      if (key < maxId) {
        maxId = key
      }
    }
  }
  return maxId
}
console.log(foodRatings(3, [[512, 1], [123, 3], [987, 4], [123, 5]])) // 123

// function must return a non-negative integer. if it is zero  it just return "now" otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds
const formatDuration = (seconds) => {
  if (seconds === 0) {
    return 'now'
  }
  const time = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }
  while (seconds > 0) {
    if (seconds >= 31536000) {
      time.year++
      seconds -= 31536000
    } else if (seconds >= 86400) {
      time.day++
      seconds -= 86400
    } else if (seconds >= 3600) {
      time.hour++
      seconds -= 3600
    } else if (seconds >= 60) {
      time.minute++
      seconds -= 60
    } else {
      time.second++
      seconds--
    }
  }
  let result = ''
  for (const key in time) {
    if (time[key] > 0) {
      if (time[key] > 1) {
        result += `${time[key]} ${key}s, `
      } else {
        result += `${time[key]} ${key}, `
      }
    }
  }
  result = result.slice(0, result.length - 2)
  const lastComma = result.lastIndexOf(',')
  if (lastComma > 0) {
    result = result.slice(0, lastComma) + ' and' + result.slice(lastComma + 1)
  }
  return result
}
console.log(formatDuration(1)) // "1 second"
console.log(formatDuration(3662)) // "1hour, 1 minute and 2 seconds"
console.log(formatDuration(62)) // "1 minute and 2 seconds"
