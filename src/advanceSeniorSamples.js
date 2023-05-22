//memoization
function expensiveFunction(arg) {
  console.log('Calculating result...');
  return arg * 2;
}

function memoize(fn) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) {
      console.log('Returning cached result...');
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  }
}

const memoizedExpensiveFunction = memoize(expensiveFunction);

console.log(memoizedExpensiveFunction(2)); // Output: Calculating result... 4
console.log(memoizedExpensiveFunction(2)); // Output: Returning cached result... 4


//currying

function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      }
    }
  }
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6

//memoize and currying

function expensiveFunction(arg1, arg2, arg3) {
  console.log('Calculating result...');
  return arg1 + arg2 + arg3;
}

function memoize(fn) {
  const cache = new Map();
  return function memoized(...args) {
    const key = args.join('-');
    if (cache.has(key)) {
      console.log('Returning cached result...');
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      }
    }
  }
}

const memoizedCurriedFunction = memoize(curry(expensiveFunction));

console.log(memoizedCurriedFunction(1)(2)(3)); // Output: Calculating result... 6
console.log(memoizedCurriedFunction(1)(2)(3)); // Output: Returning cached result... 6


//compose 

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(...fns) {
  return function composed(arg) {
    return fns.reduceRight((prevResult, fn) => {
      return fn(prevResult);
    }, arg);
  }
}

const addThenMultiply = compose(multiply.bind(null, 2), add.bind(null, 1));

console.log(addThenMultiply(3)); // Output: 8

//compose and pipe

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(...fns) {
  return function composed(arg) {
    return fns.reduceRight((prevResult, fn) => {
      return fn(prevResult);
    }, arg);
  }
}

function pipe(...fns) {
  return function piped(arg) {
    return fns.reduce((prevResult, fn) => {
      return fn(prevResult);
    }, arg);
  }
}

const addThenMultiply1 = compose(multiply.bind(null, 2), add.bind(null, 1));
const multiplyThenAdd = pipe(add.bind(null, 1), multiply.bind(null, 2));

console.log(addThenMultiply1(3)); // Output: 8
console.log(multiplyThenAdd(3)); // Output: 7

// Throttling and debouncing

function expensiveFunction() {
  console.log('Calculating result...');
}

function throttle(fn, delay) {
  let lastTime = 0;
  return function throttled(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn(...args);
      lastTime = now;
    }
  }
}

function debounce(fn, delay) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

const throttledExpensiveFunction = throttle(expensiveFunction, 1000);
const debouncedExpensiveFunction = debounce(expensiveFunction, 1000);

throttledExpensiveFunction(); // Output: Calculating result...
throttledExpensiveFunction(); // no output
throttledExpensiveFunction(); // no output
setTimeout(throttledExpensiveFunction, 2000); // Output: Calculating result...

debouncedExpensiveFunction(); // no output
setTimeout(debouncedExpensiveFunction, 500); // no output
setTimeout(debouncedExpensiveFunction, 1500); // no output
setTimeout(debouncedExpensiveFunction, 2500); // Output: Calculating result...


//proxy object

const target = {
  foo: 'bar',
  baz: 'qux'
};

const handler = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}...`);
    return target[prop];
  },
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}...`);
    target[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo); // Output: Getting foo... bar
proxy.bar = 'quux'; // Output: Setting bar to quux...
console.log(target); // Output: { foo: 'bar', baz: 'qux', bar: 'quux' }


//Reflect Api

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('John');

console.log(Reflect.has(person, 'name')); // Output: true
console.log(Reflect.get(person, 'name')); // Output: John
Reflect.set(person, 'name', 'Jane');
console.log(Reflect.get(person, 'name')); // Output: Jane
Reflect.defineProperty(person, 'age', { value: 25 });
console.log(person.age); // Output: 25