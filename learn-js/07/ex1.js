// 연습 문제 1: 카운터 만들기

function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//

// 연습 문제 2
function square() {
  const cache = {};

  return (num) => {
    if (cache[num]) {
      return cache[num];
    }
    const result = num ** 2;
    cache[num] = result;
    return result;
  };
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

//

// 연습 문제 3
function delayExecution(ms) {
  return (cb) => {
    setTimeout(() => {
      cb();
    }, ms);
  };
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

//

// 연습 문제 4
function createIdGenerator() {
  let id = 0;
  return () => ++id;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

//

// 연습 문제 5
function fibonacci() {
  const cache = {};
  return (num) => {
    if (num <= 1) return num;
    if (cache[num]) return cache[num];

    const result = fibonacci()(num - 1) + fibonacci()(num - 2);
    cache[num] = result;
    return result;
  };
}

const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)

//

// 연습 문제 6
function createStringCombiner() {
  let combinedString = "";
  return (str) => {
    combinedString += str;
    return combinedString;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

//

// 연습 문제 7
function createPropertyCounter() {
  const object = {};
  return (obj) => {
    let count = 0;
    for (const key in obj) {
      //   if (Object.prototype.hasOwnProperty.call(obj, key)) {
      //     count++;
      //   }
      count++;
    }
    return count;
  };
}

const counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1

//

// 연습 문제 8
function createFilter(condition) {
  const result = [];
  return (arr) => {
    for (const item of arr) {
      if (condition(item)) {
        result.push(item);
      }
    }
    return result;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

//

// 연습 문제 9
function createMultiCounter() {
  const counters = {};
  return (counterName) => {
    return () => {
      counters[counterName] = counters[counterName] || 0;
      counters[counterName] += 1;
      return counters[counterName];
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

//

// 연습 문제 10
function createCalculator(operator) {
  const operatorVar = operator;
  return (a, b) => {
    return operatorVar(a, b);
  };
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
