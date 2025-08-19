/*
 **설명:** 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.
 */
function createCounter() {
  let count = 0; // 내부 상태를 저장하는 변수
  return function () {
    count += 1; // 호출할 때마다 1씩 증가
    return count; // 현재 카운트 값을 반환
  };
}

// 사용 예시
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

/*
설명: 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.
*/
function square(num) {
  const cache = {}; // 캐시 객체 생성
  return function (n) {
    if (cache[n]) {
      return cache[n]; // 캐시에 결과가 있으면 반환
    }
    const result = n * n; // 제곱 계산
    cache[n] = result; // 결과를 캐시에 저장
    return result; // 결과 반환
  };
}
// 사용 예시
const squareFunc = square();
console.log(squareFunc(4)); // 16

/*
설명: 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.
*/
function delayFunction(fn, delay) {
  return function (...args) {
    setTimeout(() => {
      fn(...args); // 지정된 시간 후에 함수 실행
    }, delay);
  };
}
// 사용 예시
const delayedLog = delayFunction(console.log, 2000);
delayedLog("Hello after 2 seconds!"); // 2초 후에 "Hello after 2 seconds!" 출력

/*
설명: 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다. 
*/
function createUniqueIdGenerator() {
  let id = 0; // 초기 ID 값
  return function () {
    id += 1; // 호출할 때마다 ID 증가
    return id; // 현재 ID 반환
  };
}
// 사용 예시
const uniqueIdGenerator = createUniqueIdGenerator();
console.log(uniqueIdGenerator()); // 1
console.log(uniqueIdGenerator()); // 2

/*
설명: 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.
*/

function fibonacci() {
  const cache = {}; // 캐시 객체 생성
  function fib(n) {
    if (n <= 1) return n; // 기본 케이스
    if (cache[n]) return cache[n]; // 캐시에 결과가 있으면 반환
    cache[n] = fib(n - 1) + fib(n - 2); // 재귀 호출 및 결과 저장
    return cache[n]; // 결과 반환
  }
  return fib; // 피보나치 함수 반환
}
// 사용 예시
const fibFunc = fibonacci();
console.log(fibFunc(10)); // 55

/*
설명: 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.
*/
function createStringCombiner() {
  let combinedString = ""; // 초기 결합된 문자열
  return function (str) {
    combinedString += str; // 새로운 문자열을 결합
    return combinedString; // 현재 결합된 문자열 반환
  };
}
// 사용 예시
const stringCombiner = createStringCombiner();
console.log(stringCombiner("Hello")); // "Hello"
console.log(stringCombiner(" World")); // "Hello World"

/*
설명: 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.
*/
function createObjectCounter(obj) {
  return function () {
    return Object.keys(obj).length; // 객체의 속성 개수 반환
  };
}
// 사용 예시
const obj = { a: 1, b: 2, c: 3 };
const countProperties = createObjectCounter(obj);
console.log(countProperties()); // 3

/*
설명: 주어진 배열에서 특정 조건을 만족하는 요소만 필터링하는 함수를 작성하세요.
*/
function createFilter(arr) {
  return function (condition) {
    return arr.filter(condition); // 주어진 조건에 맞는 요소만 필터링
  };
}
// 사용 예시
const numbers = [1, 2, 3, 4, 5];
const filterEven = createFilter(numbers);
console.log(filterEven((num) => num % 2 === 0)); // [2, 4]

/*
 **설명:** 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요. 각 카운터는 별개의 값을 가지고 있어야 하며, 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.
 */
function createMultiCounter() {
  const counters = {}; // 각 카운터를 저장할 객체
  return function (counterName) {
    if (!counters[counterName]) {
      counters[counterName] = 0; // 새로운 카운터 초기화
    }
    counters[counterName] += 1; // 지정된 카운터 증가
    return counters[counterName]; // 현재 카운터 값 반환
  };
}
// 사용 예시
const multiCounter = createMultiCounter();
console.log(multiCounter("counter1")); // 1
console.log(multiCounter("counter1")); // 2

/*
설명: 기본 연산을 수행할 수 있는 계산기를 작성하세요. 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 합니다.
*/

function createCalculator(operation) {
  return function (a, b) {
    switch (operation) {
      case "add":
        return a + b; // 덧셈
      case "subtract":
        return a - b; // 뺄셈
      case "multiply":
        return a * b; // 곱셈
      case "divide":
        return a / b; // 나눗셈
      default:
        throw new Error("Unknown operation"); // 알 수 없는 연산
    }
  };
}
// 사용 예시
const adder = createCalculator("add");
console.log(adder(5, 3)); // 8
