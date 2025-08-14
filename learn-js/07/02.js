// 클로저 함수
function levelUp() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }
  return inner;
}

const warriorlUP = levelUp();

// 클로저: 내부 함수가 외부 함수의 변수를 참조하는 구조
// 함수가 선언 될 때의 렉시컬 스코프(=환경)를 기억하고, 그 스코프(=환경)에 있는 변수에 접근할 수 있는 함수

// 1. 데이터 은닉: 외부에서 접근할 수 없는 상태로 변수 보호
// 2. 상태 유지: 함수 호출 간 변수를 계속 기억

// 메모리 누수 조심

function createUser(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: () => _name,
  };
}

let user = createUser("lee");
console.log(user.getName()); // lee
user.setName("kim");
console.log(user.getName()); // lee
user = null; // undefined도 가능

let user2 = createUser("kim");
console.log(user2.getName()); // kim
user2 = null; // undefined도 가능

// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multiper) {
  return function (num) {
    return num * multiper;
  };
}

let double = makeMultiple(2);
console.log(double(5)); // 10
console.log(double(10)); // 20
double = null;


// 메모이제이션 패턴
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달괸 모든 인자를 배열 형태로 받고(...args),
    // 이를 JSON 문자열로 변환하여 캐시 키로 사용
    const key = JSON.stringify(args);

    // 이미 해당 키로 계산한 결과가 있다면 즉시 반환 (재계산 X)
    if (cache[key]) {
      return cache[key];
    }
    const result = cb(...args);
    cache[key] = result;
    return result;
  };
}
// 주어진 콜백 함수를 메모이제이션하여 중복 계산을 방지하는 함수

function slowFunction(num) {
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(10)); // 20, slowFunction 실행
console.log(memoizedFn(10)); // 20, 캐시된 값 사용
console.log(memoizedFn(20)); // 40, slowFunction 실행
