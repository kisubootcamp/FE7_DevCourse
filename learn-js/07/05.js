// 1
function createCounter() {
  // 여기에 코드를 작성하세요
  let count = 0;
  return function () {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

counter = null;

// 2.
function square() {
  const cache = {};
  return function (num) {
    if (cache[num]) return cache[num];
    cache[num] = num * num;
    return cache[num];
  };
}
let squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25
squared = null;

// 3.
// setTimeout(callback, ms)
function delayExecution(ms) {
  var ms = ms;
  return function (callback) {
    setTimeout(callback, ms);
  };
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
delayedFunc = null;

// 4.
function createIdGenerator() {
  let id = 0;
  return () => ++id;
}

let getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3
getId = null;

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

let fibo = fibonacci();
console.log(fibo(100));
console.log(Number.MAX_SAFE_INTEGER);
fibo = null;

// 6.
function createStringCombiner() {
  let str = "";
  return function (text) {
    str += text;
    return str;
  };
}

let combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"
combiner = null;

// 7
function createPropertyCounter() {
  // 여기에 코드를 작성하세요
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

// 8
function createFilter(condition) {
  return function (array) {
    const result = [];
    for (const item of array) {
      if (condition(item)) result.push(item);
    }
    return result;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 9
function createMultiCounter() {
  const counters = {};
  return function (name) {
    if (!counters[name]) counters[name] = 0;
    return function () {
      counters[name]++;
      return counters[name];
    };
  };
}

let counters = createMultiCounter();
let counterA = counters("A");
let counterB = counters("B");

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2
counters = null;
counterA = null;
counterB = null;

// 10
function createCalculator(operator) {
  return function (a, b) {
    return operator(a, b);
  };
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
