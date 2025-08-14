// // 1.
// function createCounter() {
//   let count = 0;
//   return () => ++count;
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // 2.
// function square() {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache[key]) return cache[key];

//     const result = args ** 2;

//     cache[key] = result;

//     return result;
//   };
// }
// const squared = square();
// console.log(squared(4)); // 16
// console.log(squared(4)); // 16 (캐시 사용)
// console.log(squared(5)); // 25

// // 3.
// function delayExecution(ms) {
//   return (cb) => {
//     setTimeout(cb, ms);
//   };
// }

// const delayedFunc = delayExecution(1000);
// delayedFunc(() => console.log("Executed after 1 second"));

// // 4.
// function createIdGenerator() {
//   let id = 0;
//   return () => {
//     return ++id;
//   };
// }

// const getId = createIdGenerator();
// console.log(getId()); // 1
// console.log(getId()); // 2
// console.log(getId()); // 3

// // 5.
// function fibonacci() {
//   const cache = {};

//   return function (num) {
//     const key = num;
//     const fibonacci = [];

//     if (cache[key]) return cache[key];

//     for (let i = 0; i <= key; i++) {
//       if (i < 2) fibonacci.push(i);
//       else fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//     }
//     const result = fibonacci[fibonacci.length - 1];

//     cache[key] = result;
//     return result;
//   };
// }

// const fibo = fibonacci();
// console.log(fibo(10)); // 55
// console.log(fibo(10)); // 55 (메모이제이션 사용)

// // 6.
// function createStringCombiner() {
//   const arr = [];

//   return function (str) {
//     let result = "";

//     arr.push(str);
//     for (let i = 0; i < arr.length; i++) {
//       result += arr[i];
//     }
//     return result;
//   };
// }

// const combiner = createStringCombiner();
// console.log(combiner("Hello")); // "Hello"
// console.log(combiner(" World")); // "Hello World"

// 7. 나중에
function createPropertyCounter() {
  const seen = [];
  return function (obj) {
    for (let i = 0; i < seen.length; i++) {
      if (seen[i] === obj) return 0;
    }

    seen.push(obj);

    let count = 0;
    for (const key in obj) {
      count++;
    }
    return count;
  };
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

// // 8.
// function createFilter(condition) {
//   const result = [];
//   return (args) => {
//     for (let i = 0; i < args.length; i++) {
//       if (condition(args[i])) result.push(args[i]);
//     }
//     return result;
//   };
// }

// const filterEven = createFilter((num) => num % 2 === 0);
// console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// // 9.
// function createMultiCounter() {
//   const counters = {};
//   return function (name) {
//     if (!counters[name]) {
//       counters[name] = 0;
//     }
//     return function () {
//       counters[name]++;
//       return counters[name];
//     };
//   };
// }

// const counters = createMultiCounter();
// const counterA = counters("A");
// const counterB = counters("B");

// console.log(counterA()); // 1
// console.log(counterA()); // 2
// console.log(counterB()); // 1
// console.log(counterA()); // 3
// console.log(counterB()); // 2

// // 10.
// function createCalculator(operator) {
//   let result = 0;
//   return function (...args) {
//     result = operator(...args);
//     return result;
//   };
// }

// const add = createCalculator((a, b) => a + b);
// console.log(add(2, 3)); // 5
// console.log(add(10, 5)); // 15

// const multiply = createCalculator((a, b) => a * b);
// console.log(multiply(2, 3)); // 6
// console.log(multiply(10, 5)); // 50
