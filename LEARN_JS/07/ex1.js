// Q1
function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Q2
function square() {
  const cache = {};
  return function (num) {
    if (cache[num]) return cache[num];
    cache[num] = num * num;
    return cache[num];
  };
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

// Q3
function delayExecution(ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
}
const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

// Q4
function createIdGenerator() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}
const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

function fibonacci() {
  const cache = {}; // 결과 저장소
  function fib(n) {
    // 이미 계산한 값이 있으면 즉시 반환
    if (n in cache) return cache[n];
    // 피보나치 기본값
    if (n <= 1) return n;
    // 재귀 계산 + 저장
    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  }
  return fib;
}
const fibo = fibonacci();
console.log(fibo(10)); // 55 (계산 수행)
console.log(fibo(10)); // 55 (캐시에서 즉시 반환)
console.log(fibo(15)); // 610 (계산 + 일부는 캐시 활용)

// Q6
function createStringCombiner() {
  let result = "";
  return function (str) {
    result += str;
    return result;
  };
}
const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// Q7
function createPropertyCounter() {
  let count = 0;
  return function (obj) {
    count = Object.keys(obj).length;
    return count;
  };
}
const counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1

// Q8
function createFilter(condition) {
  return function (arr) {
    return arr.filter(condition);
  };
}
const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// Q9
function createMultiCounter() {
  const counters = {};

  return function (name) {
    if (!counters[name]) {
      counters[name] = 0;
    }
    return function () {
      counters[name]++;
      return counters[name];
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

// Q10
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
