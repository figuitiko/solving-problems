class NewTest {
  data = []
  push = (item) => this.data.push(item)
  pop = () => this.data.shift()
}

const test = new NewTest()
test.push(1)
test.push(2)
console.log(test)
