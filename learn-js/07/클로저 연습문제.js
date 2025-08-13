//Q1
function createCounter() {
  let _num = 0;
  return () => ++_num;
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
counter = null;

//Q2
function square() {
  const cache = {};

  return function (num) {
    // 캐시 사용
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

// Q3
function delayExecution(ms) {
  return (cb) => setTimeout(cb, ms);
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
delayedFunc = null;

// Q4
function createIdGenerator() {
  let _id = 0;
  return () => ++_id;
}

let getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3
getId = null;

// Q5
function fibonacci() {
  const cache = {
    0: 0,
    1: 1,
  };

  function fibo(num) {
    if (cache[num] >= 0) return cache[num];

    const result = fibo(num - 2) + fibo(num - 1);
    cache[num] = result;

    return result;
  }

  return fibo;
}

let fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)
fibo = null;

// Q6
function createStringCombiner(newStr) {
  let str = "";
  return (newStr) => (str += newStr);
}

let combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"
combiner = null;

// Q7
function createPropertyCounter() {
  let obj = {};
  function a(newObj) {
    obj = newObj;
    let cnt = 0;
    for (let key in obj) {
      cnt++;
    }
    return cnt;
  }
  return a;
}

let counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1
counter2 = null;

// Q8
function createFilter(condition) {
  function filterEven(arr) {
    const result = [];
    for (const num of arr) {
      if (condition(num)) result.push(num);
    }
    return result;
  }
  return filterEven;
}

let filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
filterEven = null;

//Q9
function createMultiCounter() {
  const counters = {};
  function cache(key) {
    if (counters[key] === undefined) counters[key] = 0;
    return () => ++counters[key];
  }
  return cache;
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

//Q10
function createCalculator(operator) {
  return function (num1, num2) {
    return operator(num1, num2);
  };
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
