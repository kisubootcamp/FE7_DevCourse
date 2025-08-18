//은닉화
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
const myCount = counter();
console.log(myCount.increment());
console.log(myCount.increment());
console.log(myCount.increment());

//함수 팩토리
//함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiple) {
  return function (x) {
    return x * multiple;
  };
}

let double = makeMultiple(2);
console.log(double(10));
console.log(double(5));
double = null;

//메모리제이션 패턴: 성능 부담 연산도 최초 연산을 제외하고 이미 한번 계산한 연산이라면 빠르게 응답받을 수 있다.
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

function slowFunction(num) {
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}

// console.log(slowFunction(10)); //8.817 seconds
// console.log(slowFunction(10)); //8.817 seconds

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(10));
console.log(memoizedFn(10));
console.log(memoizedFn(10)); // 8.88 seconds
