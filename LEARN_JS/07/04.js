// 은닉화
function counter() {
  let _count = 0;
  return {
    increment: function () {
      return ++_count;
    },
    decrement: function () {
      return --_count;
    },
  };
}
const mycount = counter();
console.log(mycount.increment()); // 1
console.log(mycount.increment()); // 2
console.log(mycount.decrement()); // 1

mycount.increment = null;
mycount.decrement = null;

// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiper) {
  return function (x) {
    return x * multiper;
  };
}
let double = makeMultiple(2);
console.log(double(10));
console.log(double(5));
double = null;

// 메모이제이션 패턴
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고...(...args)
    // 이를 JSON 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    // 이미해당 key로 계산한 결과가 있다면 즉시 반환
    if (cache[key]) return cache[key];
    // 캐시에 없다면, 원래 함수를 실행하여 결과를 얻음
    const result = cb(...args);
    // 결과를 캐시에 저장함
    cache[key] = result;
    // 결과를 반환함
    return result;
  };
}

function slowFuncion(num) {
  for (let i = 0; i < 9999999; i++);
  return num * 2;
}

const memoizedFn = memoization(slowFuncion);
console.log(memoizedFn(10));
console.log(memoizedFn(10));
console.log(memoizedFn(10));
