const lonelyinteger = (a) => {
  for (let i = 0; i < a.length; i++) {
    const tempRestArr = a.filter((item, idx) => idx !== i)
    if (!tempRestArr.includes(a[i])) {
      return a[i]
    }
  }
}
console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))
