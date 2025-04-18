// Problem: Given a sorted array, find if there exists a pair with a given sum

function hasPairWithSum (arr, target) {
  let left = 0; let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) return true
    sum < target ? left++ : right--
  }
  return false
}

console.log(hasPairWithSum([2, 3, 2, 6, 8], 2))
