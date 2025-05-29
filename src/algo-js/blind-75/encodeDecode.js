const encode = (strs) => {
  if (!strs.length) return null
  return strs.join('-encodeStr')
}
const decode = (s) => {
  if (s === null) return []
  return s.split('-encodeStr')
}
