const linkListCycle = (head) => {
  if (!head) return false
  let fast = head
  let slow = head
  while (fast) {
    if (!fast.next) {
      return false
    } else {
      fast = fast.nex.next
      slow = slow.next
    }
    if (fast === slow) return true
  }
  return false
}
