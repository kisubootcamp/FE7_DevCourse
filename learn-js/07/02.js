function createUser(name) {
  let _name = name; // _ private

  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());

user = null; // 클로저 참조를 끊는 행위(메모리 해제)이기 때문에 undefined도 가능

user.getName = null;
user.setName = null;
// 이렇게 해도 참조 관계가 끊어지기 때문에 됨

// 클로저의 대표 패턴 -> 은닉화
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

// 함수 팩토리 => 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiper) {
  return function (x) {
    return x * multiper;
  };
}

let double = makeMultiple(2); // 무조건 2를 곱하는 함수
console.log(double(10));
double = null;

// 메모이제이션 패턴
function memoization(cb) {
  const cache = {};

  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고... (...args)
    // 이를 JSON 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];

    // 캐시가 없다면, 원래 함수(fn)를 실행하여 결과를 얻음
    const result = cb(...args);

    // 결과를 캐시에 저장함
    cache[key] = result;

    //결과를 반환
    return result;
  };
}

// 메모이제이션도 클로저 패턴
