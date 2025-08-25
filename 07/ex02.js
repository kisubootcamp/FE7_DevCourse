function createCounter() {
  let count = 0;
  return () => (count += 1);
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// counter = null;

// 2.
function square() {
  let nums = {};
  return (num) => {
    if (nums[num]) return nums[num];
    nums[num] = num ** 2;
    return nums[num];
  };
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

// 3.
function delayExecution(ms) {
  return (str) => setTimeout(str, ms);
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

// 4.
function createIdGenerator() {
  let num = 0;
  return () => ++num;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

// 5.
function fibonacci() {
  const cache = {};
  function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
  return fib;
}

const fibo = fibonacci();
console.log(fibo(100)); // 55
console.log(fibo(100)); // 55 (메모이제이션 사용)

// 6.
function createStringCombiner() {
  // const arr = [];
  let result = "";
  return (str) => {
    result += str;
    return result;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// 7.
function createPropertyCounter() {
  let storeObj = null;
  return function (obj) {
    storeObj = obj;
    let count = 0;
    for (let key in storeObj) {
      count++;
    }
    return count;
  };
}

const counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1

// 8.
function createFilter(condition) {
  return (arr) => {
    const numArr = [];
    for (const num of arr) {
      if (condition(num)) numArr.push(num);
    }
    return numArr;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 9.
function createMultiCounter() {
  const counters = {};
  return (name) => {
    return () => {
      if (!counters[name]) counters[name] = 0;
      return ++counters[name];
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
// counters = null;
// counterA = null;
// counterB = null;

// 10.
function createCalculator(operator) {
  return (...args) => operator(...args);
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
