function generateLogs (count = 30) {
  const logs = []
  const startTime = new Date('2025-10-03T09:00:00Z').getTime()

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(startTime + i * 5 * 60 * 1000).toISOString() // every 5 min
    const customerId = `customer${Math.floor(Math.random() * 10) + 1}` // 1–10
    const bookId = `book${Math.floor(Math.random() * 100) + 1}` // 1–100

    logs.push([timestamp, customerId, bookId])
  }

  return logs
}

// const logs = generateLogs(50)
const logs = [
  ['2025-10-03T09:00:00Z', 'customer1', 'book23'],
  ['2025-10-03T09:05:00Z', 'customer3', 'book23'],
  ['2025-10-03T09:10:00Z', 'customer2', 'book15'],
  ['2025-10-03T09:15:00Z', 'customer1', 'book8'],
  ['2025-10-03T09:20:00Z', 'customer5', 'book15'],
  ['2025-10-03T09:25:00Z', 'customer3', 'book8'],
  ['2025-10-03T09:30:00Z', 'customer2', 'book23'],
  ['2025-10-03T09:35:00Z', 'customer4', 'book42'],
  ['2025-10-03T09:40:00Z', 'customer5', 'book8'],
  ['2025-10-03T09:45:00Z', 'customer1', 'book15'],
  ['2025-10-03T09:50:00Z', 'customer6', 'book23'],
  ['2025-10-03T09:55:00Z', 'customer3', 'book42'],
  ['2025-10-03T10:00:00Z', 'customer5', 'book15'],
  ['2025-10-03T10:05:00Z', 'customer2', 'book8'],
  ['2025-10-03T10:10:00Z', 'customer4', 'book23'],
  ['2025-10-03T10:15:00Z', 'customer1', 'book23'],
  ['2025-10-03T10:20:00Z', 'customer6', 'book8'],
  ['2025-10-03T10:25:00Z', 'customer5', 'book42'],
  ['2025-10-03T10:30:00Z', 'customer3', 'book15'],
  ['2025-10-03T10:35:00Z', 'customer2', 'book42'],
  ['2025-10-03T10:40:00Z', 'customer4', 'book15'],
  ['2025-10-03T10:45:00Z', 'customer6', 'book23'],
  ['2025-10-03T10:50:00Z', 'customer1', 'book42'],
  ['2025-10-03T10:55:00Z', 'customer2', 'book23'],
  ['2025-10-03T11:00:00Z', 'customer5', 'book8'],
  ['2025-10-03T11:05:00Z', 'customer3', 'book15'],
  ['2025-10-03T11:10:00Z', 'customer6', 'book42'],
  ['2025-10-03T11:15:00Z', 'customer1', 'book8'],
  ['2025-10-03T11:20:00Z', 'customer2', 'book15'],
  ['2025-10-03T11:25:00Z', 'customer5', 'book23'],
  ['2025-10-03T11:30:00Z', 'customer4', 'book8'],
  ['2025-10-03T11:35:00Z', 'customer3', 'book23'],
  ['2025-10-03T11:40:00Z', 'customer6', 'book15'],
  ['2025-10-03T11:45:00Z', 'customer2', 'book8'],
  ['2025-10-03T11:50:00Z', 'customer1', 'book15'],
  ['2025-10-03T11:55:00Z', 'customer5', 'book42'],
  ['2025-10-03T12:00:00Z', 'customer3', 'book8'],
  ['2025-10-03T12:05:00Z', 'customer4', 'book23'],
  ['2025-10-03T12:10:00Z', 'customer6', 'book42'],
  ['2025-10-03T12:15:00Z', 'customer2', 'book23'],
  ['2025-10-03T12:20:00Z', 'customer1', 'book42'],
  ['2025-10-03T12:25:00Z', 'customer3', 'book15'],
  ['2025-10-03T12:30:00Z', 'customer5', 'book8'],
  ['2025-10-03T12:35:00Z', 'customer4', 'book15'],
  ['2025-10-03T12:40:00Z', 'customer6', 'book8'],
  ['2025-10-03T12:45:00Z', 'customer1', 'book23'],
  ['2025-10-03T12:50:00Z', 'customer2', 'book15'],
  ['2025-10-03T12:55:00Z', 'customer4', 'book8'],
  ['2025-10-03T13:00:00Z', 'customer3', 'book23'],
  ['2025-10-03T13:05:00Z', 'customer5', 'book15']
]

const getRecommendation = (bookToRecommend) => {
  const mapCostumers = {}
  for (const [date, costumer, book] of logs) {
    if (!mapCostumers[costumer]) {
      mapCostumers[costumer] = [{
        book,
        date
      }]
    } else {
      mapCostumers[costumer].push({ book, date })
      mapCostumers[costumer].sort((a, b) => {
        if (a.date > b.date) {
          return 1
        } if (a.date < b.date) {
          return 0
        } else {
          return 0
        }
      })
    }
  }
  const bookMaps = {}
  for (const books of Object.values(mapCostumers)) {
    for (let i = 0; i < books.length - 1; i++) {
      const currBook = books[i].book
      const nextBook = books[i + 1].book
      if (!bookMaps[currBook]) {
        bookMaps[currBook] = { [nextBook]: 1 }
      } else {
        if (!bookMaps[currBook][nextBook]) {
          bookMaps[currBook][nextBook] = 1
        } else {
          bookMaps[currBook][nextBook] += 1
        }
      }
    }
  }
  if (!bookMaps[bookToRecommend]) {
    return -1
  }
  const max = 0
  let recommended = ''
  for (const [key, value] of Object.entries(bookMaps[bookToRecommend])) {
    if (value > max) {
      recommended = key
    }
  }
  return recommended
}

console.log(getRecommendation('book23'))
