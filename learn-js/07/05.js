// ### 문제 1: 카운터 만들기
// **설명:** 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.

function createCounter() {
  let count = 0;
  function incrementCount() {
    count++;
    return count;
  }
  return incrementCount;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ### 문제 2: 비공식적인 캐싱
// **설명:** 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.

function memoization(cb) {
  const cache = {};
  return function (...args) {
    //함수 호출 시 전달된 모든 인자를 배열 형태로 받고... (...args)
    //이를 JSON 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);
    //이미 해당 키로 계산한 결과가 이싿면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];
    const result = cb(...args); //캐시에 없다면 원래 함수(fn)을 실행하여 결과를 얻음.
    cache[key] = result; // 결과를 캐시에 저장
    return result; //결과 반환
  };
}

function square(num) {
  return num * num;
}
const squared = memoization(square);
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

//강사님 풀이
function square2() {
  const cache = {};
  return function (num) {
    if (cache[num]) return cache[num];
    cache[num] = num * num;
    return cache[num];
  };
}
const squared2 = square2();
console.log(squared2(4)); // 16
console.log(squared2(4)); // 16 (캐시 사용)
console.log(squared2(5)); // 25

// ### 문제 3: 지연 실행
// **설명:** 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.
function delayExecution(ms) {
  const sec = ms;
  function f(fn) {
    setTimeout(fn, sec);
  }
  return f;
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));

// 아래부터 시간 내 못 품

// ### 문제 4: 고유 ID 생성기
// **설명:** 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다.

//강사님 풀이
function createIdGenerator() {
  let id = 0;
  return () => ++id;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

// ### 문제 5: 메모이제이션
// **설명:** 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.

//강사님 풀이
function fibonacci() {
  let cache = {};
  function f(num) {
    if (num <= 1) return num;
    if (cache[num]) return cache[num];
    cache[num] = f(num - 1) + f(num - 2);
    return cache[num];
  }
  return f;
}

const fibo = fibonacci();
console.log(fibo(100)); // 55 15초 이상 걸림
console.log(fibo(100)); // 55 (메모이제이션 사용) 0.068 seconds

// ### 문제 6: 문자열 결합
// **설명:** 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.
function createStringCombiner() {
  let cache = "";
  return (str) => {
    cache += str;
    return cache;
  };
}
const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

// ### 문제 7: 객체 속성 카운터
// **설명:** 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.

//강사님 풀이
function createPropertyCounter() {
  let storeObj = null; //클로저 필수
  return (obj) => {
    storeObj = obj; //클로저 필수
    let count = 0;
    for (let key in storeObj) count++;
    return count;
  };
}

const counter1 = createPropertyCounter();
console.log(counter1({ a: 1, b: 2 })); // 2
console.log(counter1({ a: 1 })); // 1

// ### 문제 8: 배열 필터링
// **설명:** 주어진 배열에서 특정 조건을 만족하는 요소만 필터링하는 함수를 작성하세요.

//강사님 풀이
function createFilter(condition) {
  return (arr) => {
    const result = [];
    for (let item of arr) {
      if (condition(item)) result.push(item);
    }
    return result;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

// ### 문제 9: 다중 카운터
// **설명:** 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요. 각 카운터는 별개의 값을 가지고 있어야 하며,
// 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.

//강사님 풀이
function createMultiCounter() {
  const counter = {};
  return function (name) {
    if (!counter[name]) counter[name] = 0;
    return function () {
      counter[name]++;
      return counter[name];
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

// ### 문제 10: 고차 함수로 커스터마이징된 계산기
// **설명:** 기본 연산을 수행할 수 있는 계산기를 작성하세요. 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 합니다.

//강사님 풀이
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
