// 2.비공식적인 캐싱 : 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.
function square() {
  const caches = {};
  return (num) => {
    if (caches[num]) return caches[num];
    caches[num] = num ** 2;
    return caches[num];
  };
}
let squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25
squared = null;

// 3. 지연 실행 : 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.
function delayExecution(ms) {
  return (cb) => {
    return setTimeout(cb, ms);
  };
}

const delayedFunc = delayExecution(1000);
delayedFunc(() => console.log('Executed after 1 second'));
// 4. 고유 ID 생성기 : 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다.
function createIdGenerator() {
  let Id = 1;
  return () => Id++;
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

// 5. 메모이제이션 : 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.
function fibonacci() {
  const caches = {};
  function fib(n) {
    if (n <= 1) return n;
    if (caches[n]) return caches[n];
    caches[n] = fib(n - 1) + fib(n - 2);
    return caches[n];
  }
  return fib;
}
const fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(10)); // 55 (메모이제이션 사용)
// 6. 문자열 결합 : 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.

// 7. 객체 속성 카운터 : 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.
function createPropertyCounter() {
  let Object = {};
  return (obj) => {
    let count = 0;
    Object = obj;
    for (key in obj) {
      count++;
    }
    return count;
  };
}
const counter = createPropertyCounter();
console.log(counter({ a: 1, b: 2 })); // 2
console.log(counter({ a: 1 })); // 1

// 8. 배열 필터링 : 주어진 배열에서 특정 조건을 만족하는 요소만 필터링하는 함수를 작성하세요.
function createFilter(condition) {
  return (arr) => {
    const arrFilter = [];
    for (v of arr) {
      if (condition(v)) arrFilter.push(v);
    }
    return arrFilter;
  };
}

const filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]
// 9. 다중 카운터 : 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요.
// 각 카운터는 별개의 값을 가지고 있어야 하며, 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.
function createMultiCounter() {
  return (spr) => {
    const value = {};
    if (!value[spr]) value[spr] = 0;
    return () => ++value[spr];
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

// 10. 고차 함수로 커스터마이징된 계산기 : 기본 연산을 수행할 수 있는 계산기를 작성하세요.
// 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 합니다.
function createCalculator(operator) {
  return (a, b) => operator(a, b);
}

const add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

const multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50
