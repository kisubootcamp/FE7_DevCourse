//클로저 연습문제

//1
// function createCounter() {
//   let count1 = 0;
//   function count() {
//     return ++count1;
//   }
//   return count;
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// counter = null;

//2
function square() {
  const cache = {};
  function sqr(num) {
    if (cache[num]) return cache[num];
    cache[num] = num * num;
    return cache[num];
  }
  return sqr;
}

const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

//3
function delayExecution(ms) {
  function oneSecond(callback) {
    setTimeout(callback, ms);
  }
  return oneSecond;
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
delayedFunc = null;

//4
function createIdGenerator() {
  let ID = 0;
  function plusId() {
    return ++ID;
  }
  return plusId;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

//5
function fibonacci() {
  const cache = {};
  function fibo(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = fibo(n - 1) + fibo(n - 2);
    return cache[n];
  }
  return fibo;
}

const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)

//6
function createStringCombiner() {
  let rememberStr = "";
  return (str) => {
    rememberStr += str;
    return rememberStr;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

//7
function createPropertyCounter() {
  let storeObj = null;
  function count(obj) {
    storeObj = obj;
    let count1 = 0;
    for (let idx in storeObj) count1++;
    return count1;
  }
  return count;
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

//8
// condition을 계속 참조하고 있기 때문에 클로저가 된 것
function createFilter(condition) {
  return function filter(arr) {
    const newArr = [];
    for (inner of arr) {
      if (condition(inner)) newArr.push(inner);
    }
    return newArr;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

//9

function createMultiCounter() {
  const counters = {};
  return (name) => {
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

//10

function createCalculator(operator) {
  return (num1, num2) => {
    return operator(num1, num2);
  };
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
