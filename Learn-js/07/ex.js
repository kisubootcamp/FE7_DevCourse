// 1. 카운터 만들기
function createCounter() {
  let count = 0;
  return () => ++count;
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
counter = null;

// 2. 비공식적인 캐싱
function square() {
  const cache = {};
  return function (num) {
    const key = JSON.stringify([num]);
    if (cache[key]) return cache[key];
    const result = num ** 2;
    cache[key] = result;
    return result;
  };
}
let squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25
squared = null;

// 3. 지연 실행
function delayExecution(ms) {
  return function (callback) {
    setTimeout(() => {
      callback();
    }, ms);
  };
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
delayedFunc = null;

// 4. 고유 ID 생성기
function createIdGenerator() {
  let _id = 0;
  return () => ++_id;
}

let getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3
getId = null;

// 5. 메모이제이션
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

let fibo = fibonacci();
console.log(fibo(10)); //55
fibo = null;

// 6. 문자열 결합
function createStringCombiner() {
  let combined = "";
  return function (str) {
    return (combined += str);
  };
}

let combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"
combiner = null;

// 7. 객체 속성 카운터
function createPropertyCounter() {
  let strObj = null;
  return function (obj) {
    strObj = obj;
    let count = 0;
    for (let key in strObj) {
      count++;
    }
    return count;
  };
}

let counter2 = createPropertyCounter();
console.log(counter2({ a: 1, b: 2 })); // 2
console.log(counter2({ a: 1 })); // 1

// 8. 배열 필터링
function createFilter(condition) {
  return function (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) result.push(arr[i]);
    }
    return result;
  };
}

let filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// 9. 다중 카운터
function createMultiCounter() {
  const cache = {};
  return function (str) {
    if (!cache[str]) cache[str] = 0;
    return function () {
      cache[str]++;
      return cache[str];
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

// 10. 고차 함수로 커스터마이징된 계산기
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
