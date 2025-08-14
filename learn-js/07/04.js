// 은닉화
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const mycount = counter();
console.log(mycount.increment());
mycount = null;

// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiper) {
  return function (x) {
    return x * multiper;
  };
}

const double = makeMultiple(2);

console.log(double(10));
double = null;

// 메모이제이션 패턴
// 똑같은 값이 재할당 됐을 때, 또 연산을 수행하는 것이 아니라 메모리에 있던 값을 바로 다시 꺼내오는 것
function memoization(cb) {
  const cache = {};
  return function (...args) {
    //함수 호출 시 전단된 모든 인자를 배열 형태로 받고 ...{...args}
    //이를 JSON 문자열로 반환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];
    // 캐시에 없다면, 원래 함수(fn)을 실행하여 결과를 얻음
    const result = cb(...args);
    // 결과를 캐시에 저장함
    cache[key] = result;
    // 결과를 반환함
    return result;
  };
}

function slowFunction(num) {
  for (let i = 0; i < 99999999; i++);
  return num * 2;
}

const memoizedFn = memoization(slowFunction);
console.log(slowFunction(10));
console.log(slowFunction(10));
console.log(slowFunction(10));
