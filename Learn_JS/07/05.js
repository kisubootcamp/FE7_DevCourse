// ### 문제 1: 카운터 만들기

// **설명:** 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.

// **기본 제공 코드:**

// ```jsx
function createCounter() {
    let count = 0;
    return () => ++count;
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ```

// ---

// ### 문제 2: 비공식적인 캐싱

// **설명:** 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.

// **기본 제공 코드:**

// ```jsx
function square() {
  const cache = {};
  return num => cache[num] ?? (cache[num] = num * num);
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16
console.log(squared(5)); // 25

// ```

// ---

// ### 문제 3: 지연 실행

// **설명:** 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.

// **기본 제공 코드:**

// ```jsx
function delayExecution(ms) {
  return (callback) => setTimeout(callback, ms);
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
// ```

// ---

// ### 문제 4: 고유 ID 생성기

// **설명:** 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다. 

// **기본 제공 코드:**

function createIdGenerator() {
  let id = 0;
  return () => ++id;
};

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

// ```

// ---

// ### 문제 5: 메모이제이션

// **설명:** 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.

// **기본 제공 코드:**
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
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)
// ---

// ### 문제 6: 문자열 결합

// **설명:** 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.

// **기본 제공 코드:**

// ```jsx
function createStringCombiner() {
  let combined = "";
  return function(str) {
    combined += str;
    return combined;
  };
}

const combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"
// ```

// ---

// ### 문제 7: 객체 속성 카운터

// **설명:** 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.

// **기본 제공 코드:**

// ```jsx
function createPropertyCounter() {
  let lastObj = null;
  return function(obj) {
    lastObj = obj;
    return Object.keys(obj).length;
  };
}

const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

// ```

// ---

// ### 문제 8: 배열 필터링

// **설명:** 주어진 배열에서 특정 조건을 만족하는 요소만 필터링하는 함수를 작성하세요.

// **기본 제공 코드:**

function createFilter(condition) {
  return function(arr) {
    return arr.filter(condition);
  };
}

const filterEven = createFilter(num => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
// ```

// ### 문제 9: 다중 카운터

// **설명:** 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요. 각 카운터는 별개의 값을 가지고 있어야 하며, 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.

// **기본 제공 코드:**

function createMultiCounter() {
  const counters = {};
  return function(name) {
    if (!counters[name]) counters[name] = 0;
    return function() {
      counters[name]++;
      return counters[name];
    };
  };
}

const counters = createMultiCounter();
const counterA = counters('A');
const counterB = counters('B');

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2

// ```

// ---

// ### 문제 10: 고차 함수로 커스터마이징된 계산기

// **설명:** 기본 연산을 수행할 수 있는 계산기를 작성하세요. 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 합니다.

// **기본 제공 코드:**

// ```jsx
function createCalculator(operator) {
  return function(a, b) {
    return operator(a, b);
  };
}
const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
// ```