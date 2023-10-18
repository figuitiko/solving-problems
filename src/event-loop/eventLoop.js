const fs = require('fs')
// console.log('console.log 1')
// process.nextTick(() => console.log('process.nextTick 1'))
// console.log('console.log 2')

// Promise.resolve().then(() => console.log('Promise 1 resolved'))
// process.nextTick(() => console.log('process.nextTick 2'))

// setTimeout(() => console.log('setTimeout 1'), 0)
// setTimeout(() => {
//   process.nextTick(() => console.log('process.nextTick inside setTimeout'))
// }, 0)
// setTimeout(() => console.log('setTimeout 3'), 0)

// process.nextTick(() => console.log('process.nextTick 3'))
// process.nextTick(() => {
//   console.log('process.nextTick 4')
//   process.nextTick(() => console.log('process.nextTick 5'))
// })
// Promise.resolve().then(() => console.log('Promise 2 resolved'))
// Promise.resolve().then(() => {
//   console.log('Promise 3 resolved')
//   process.nextTick(() => console.log('process.nextTick 6'))
// })
// Promise.resolve().then(() => console.log('Promise 4 resolved'))

// fs.readFile(__filename, () => {
//   console.log('I/O')
//   setImmediate(() => console.log('this is a inner setImmediate inside readFile'))
//   process.nextTick(() => console.log('this is a inner process.nextTick inside readFile'))
//   Promise.resolve().then(() => console.log('this is inner Promise inside readfile'))
// })

// process.nextTick(() => console.log('this is process.nexTick 1'))
// Promise.resolve().then(() => console.log('this is Promise.resolve 1'))
// setImmediate(() => console.log('this is setImmediate 1'))

// for (let i = 0; i < 200000000; i++) {}

const readableStream = fs.createReadStream(__filename)
readableStream.close()
readableStream.on('close', () => {
  console.log('this is from readableStream close event callback')
})
setImmediate(() => console.log('this is  setImmediate 1'))
setTimeout(() => console.log('this is setTimeout 1'), 0)
Promise.resolve().then(() => console.log('this is Promise.resolve 1'))
process.nextTick(() => console.log('this is process.nextTick 1'))
