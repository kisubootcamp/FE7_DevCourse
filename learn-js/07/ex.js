//1

function createCounter() {
  let _counter = 0;
  return () => ++_counter;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//2
function square() {
  const cache = {};
  return function (n) {
    if (cache[n]) return cache[n];
    const result = n * n;
    cache[n] = result;
    return result;
  };
}

const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

//3
function delayExecution(ms) {
  return (cb) => setTimeout(cb, ms);
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

//4
function createIdGenerator() {
  let _id = 0;
  return () => ++_id;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

//5
function fibonacci() {
  const cache = {};
  return function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibo = fibonacci();
console.log(fibo(40)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)

//6
function createStringCombiner() {
  let _str = "";
  return (newStr) => {
    _str += newStr;
    return _str;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

//7
function createPropertyCounter() {
  let _obj = {};
  return (obj) => {
    _obj = obj;
    let ct = 0;
    for (let i in obj) ct++;
    return ct;
  };
}

const counter7 = createPropertyCounter();
console.log(counter7({ a: 1, b: 2 })); // 2
console.log(counter7({ a: 1 })); // 1

//8
function createFilter(condition) {
  return (arr) => {
    const result = [];
    for (let i of arr) {
      if (condition(i)) result.push(i);
    }
    return result;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

//9
function createMultiCounter() {
  return (key) => {
    let ct = 0;
    return () => ++ct;
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

//10
function createCalculator(operator) {
  return operator;
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
