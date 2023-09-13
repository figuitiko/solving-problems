const station = 2
// const arrValues = [2, 0, 1]
const utopianTree = (n) => {
  let tree = 0
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      tree = tree * 2
    } else {
      tree++
    }
  }
  return tree
}
console.log('utopian', utopianTree(5))
// for(let item of arrValues){

//    console.log(utopianTree());
// }
