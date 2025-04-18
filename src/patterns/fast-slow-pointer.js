// Problem: Detect a cycle in a linked list.

function hasCycle (head) {
  let slow = head; let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
