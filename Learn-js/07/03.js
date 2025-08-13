// 클로저 은닉화 패턴
function counter() {
  let _count = 0; // count 변수 은닉화
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
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.decrement());
mycount.increment = null;
mycount.decrement = null;
// => 내가 숨기고자 하는 변수를 코딩화할 때 많이 사용하는 패턴

// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}
let double = makeMultiple(2);
for (let i = 1; i < 10; i++) {
  console.log(`2 * ${i} = ${double(i)}`);
}
double = null;

let Triple = makeMultiple(3);
for (let i = 1; i < 10; i++) {
  console.log(`2 * ${i} = ${Triple(i)}`);
}
Triple = null;

// 메모이제이션 패턴
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고...(...args)
    // 이를 JSON 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];
    // 캐시에 없다면, 원래 함수(fn)을 실행해서 결과를 result에 저장
    const result = cb(...args);
    // 결과를 캐시에 저장함
    cache[key] = result;
    // 결과 반환
    return result;
  };
}
function slowFunc(num) {
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}

const memoizationFn = memoization(slowFunc);

console.log(memoizationFn(10)); // 처음 계산만 오래 걸리고
console.log(memoizationFn(10)); // 여기부턴 계산 결과가 있기 때문에 바로 나옴
console.log(memoizationFn(10));
