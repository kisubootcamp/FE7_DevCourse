function createUser(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());
user = null;

let user2 = createUser("park");
console.log(user2.getName());
user2 = null;

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

let mycount = counter();
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.decrement());
mycount = null; // 메모리 해제

//함수 팩토리

function makeMultiple(multiplier) {
  return (x) => x * multiplier;
}
let double = makeMultiple(2);
console.log(double(10));
double = null;

//메모이제이션
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받음 ...args
    // 이를 json 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    //이미 해당 key로 계산한 결과가 있다면 즉시 반환
    if (cache[key]) return cache[key];
    // 없으면 원래 함수 실행하고 캐시에 저장
    const result = cb(...args);
    cache[key] = result;
    return result;
  };
}

function slowFunction(num) {
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}
const memoized = memoization(slowFunction)
console.log(memoized(10));
console.log(memoized(10));
console.log(memoized(10));
