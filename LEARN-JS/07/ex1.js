// 연습문제
// 메모이제이션 함수
function memoization(cb) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = cb(...args);
    cache[key] = result;
    return result;
  };
}

// 1.
// function createCounter() {
//   let _count = 0;
//   function counter() {
//     return ++_count;
//   }
//   return counter;
// }
// let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// counter = null;

// 2.
// function square() {
//   const cache = {};
//   return function (num) {
//     if (cache[num]) return cache[num];
//     cache[num] = num * num;
//     return cache[num];
//   };
// }

// let squared = square();
// console.log(squared(4));
// console.log(squared(4));
// console.log(squared(5));
// squared = null;

// 3.
// function delayExecution(ms) {
//   return (console) => setTimeout(console, ms);
// }
// let delayedFunc = delayExecution(3000);
// delayedFunc(() => console.log('Executed after 1 second'));
// delayedFunc = null;

// 4.
// function createIdGenerator() {
//   let _id = 0;
//   return () => ++_id;
// }
// let getId = createIdGenerator();
// let getId2 = createIdGenerator();
// console.log(getId());
// console.log(getId());
// console.log(getId2());
// console.log(getId2());
// getId = null;
// getId2 = null;

// 5.
// function fibonacci() {
//   return memoization((num) => {
//     let num1 = 0;
//     let num2 = 1;
//     for (let i = 2; i <= num; i++) {
//       let temp = num1 + num2;
//       num1 = num2;
//       num2 = temp;
//     }
//     return num2;
//   });
// }
// const fibo = fibonacci();
// console.log(fibo(999));
// console.log(fibo(999));

//
// function fibonacci() {
//   const cache = {};
//   function fib(n) {
//     if (n <= 1) return n;
//     if (cache[n]) return cache[n];
//     cache[n] = fib(n - 1) + fib(n - 2);
//     return cache[n];
//   }
//   return fib;
// }

// 6.
// function createStringCombiner() {
//   let _str = '';
//   function combine(newStr) {
//     _str += newStr;
//     return _str;
//   }
//   return combine;
// }
// let combiner = createStringCombiner();
// console.log(combiner('Hello'));
// console.log(combiner(' World'));
// combiner = null;

// 7.
// function createPropertyCounter() {
//   let _obj = {};
//   function objCount(obj) {
//     _obj = obj;
//     let count = 0;
//     for (key in _obj) count++;
//     return count;
//   }
//   return memoization(objCount);
// }
// let counter = createPropertyCounter();
// console.log(counter({ a: 1, b: 2, c: 3 }));
// console.log(counter({ a: 1 }));
// counter = null;

// 8.
// function createFilter(condition) {
//   return (arr) => {
//     const evenArr = [];
//     for (num of arr) {
//       if (condition(num)) evenArr.push(num);
//     }
//     return evenArr;
//   };
// }
// const filterEven = createFilter((num) => num % 2 === 0);
// console.log(filterEven([2, 3, 4, 6, 15]));

// 9.
// function createMultiCounter() {
//   const obj = {};
//   function setName(name) {
//     return () => {
//       if (obj[name]) {
//         obj[name] += 1;
//       } else {
//         obj[name] = 1;
//       }
//       return obj[name];
//     };
//   }
//   return setName;
// }

// let counters = createMultiCounter();
// let counterA = counters('A');
// let counterB = counters('B');

// console.log(counterA());
// console.log(counterA());
// console.log(counterB());
// console.log(counterA());
// console.log(counterB());

// counters = null;
// counterA = null;
// counterB = null;

// 10.
// function createCalculator(operator) {
//   return (num1, num2) => operator(num1, num2);
// }

// const add = createCalculator((a, b) => a + b);
// console.log(add(2, 3));
// console.log(add(10, 5));

// const multiply = createCalculator((a, b) => a * b);
// console.log(multiply(2, 3));
// console.log(multiply(10, 5));
// console.log(add(4, 5));
// console.log(multiply(3, 5));

// 피보나치
// function fibo(n) {
//   const fibonacci = memoization((num) => {
//     let num1 = 0;
//     let num2 = 1;
//     for (let i = 2; i <= num; i++) {
//       let temp = num1 + num2;
//       num1 = num2;
//       num2 = temp;
//     }
//     return num2 % 1234567;
//   });
//   return fibonacci(n);
// }

// console.log(fibo(3));
