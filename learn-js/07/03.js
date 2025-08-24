// 클로저 연습 문제

// 1
function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 2
function square() {
  const cache = {};

  return (x) => {
    if (cache[x]) return cache[x];

    const result = x * x;
    cache[x] = result;

    return result;
  };
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

// 3
function delayExecution(ms) {
  return (cb) => setTimeout(cb, ms);
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

// 4
function createIdGenerator() {
  let id = 0;
  return () => ++id;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

// 5
function fibonacci() {
  const cache = [0, 1];

  return (n) => {
    if (n < 3) return cache[n];
    if (n < cache.length) return cache[n];

    for (let i = cache.length; i <= n; i++) {
      cache[i] = cache[i - 2] + cache[i - 1];
    }

    return cache[n];
  };
}

const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)

// 6
function createStringCombiner() {
  let string = "";

  return (str) => (string += str);
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// 7
function createPropertyCounter() {
  let obj = {};

  return (o) => {
    obj = o;

    let count = 0;

    for (const key in obj) {
      count++;
    }

    return count;
  };
}

const counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1

// 8
function createFilter(condition) {
  return (arr) => {
    const result = [];
    for (const x of arr) {
      if (condition(x)) result.push(x);
    }
    return result;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 9
function createMultiCounter() {
  const obj = {};

  return (key) => {
    if (!obj[key]) obj[key] = 0;

    return () => {
      obj[key]++;

      return obj[key];
    };
  };
}

const counters = createMultiCounter();
const counterA = counters("A");
const counterB = counters("B");

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2

// 10
function createCalculator(fn) {
  return (a, b) => fn(a, b);
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
