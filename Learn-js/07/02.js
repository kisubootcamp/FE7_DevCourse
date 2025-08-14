// 변수가 보호, 은닉되지 않는다는 예시

/* let level = 1;
function levelUp() {
  level++;
}
levelUp();
levelUp();
levelUp();
levelUp();
level = 99;
levelUp();
levelUp();
console.log(level); */

function levelUp() {
  let level = 0;
  const inner = function inner() {
    level++;
    return level;
  };
  return inner;
}
const warriorLUp = levelUp();
const archerUp = levelUp();

let warrior = warriorLUp();
warrior = warriorLUp();
warrior = warriorLUp();

let archer = archerUp();
archer = archerUp();
archer = archerUp();
archer = archerUp();

console.log(`warrior: ${warrior}`);
console.log(`archer: ${archer}`);

// -----------------------------------------------------------------------------------------------------
// 클로저, 클로저 함수
// 함수가 선언 될 때의 렉시컬 스코프(=환경)를 기억하고, 그 스코프(=환경)에 있는 벼눗에 접근할 수 있는 함수
// 1. 데이터 은닉 - 외부에서 데이터를 직접 접근 x
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억
function outer() {
  let count = 0;
  return () => ++count;
}

const counter1 = outer();
console.log(counter1());
console.log(counter1());
console.log(counter1());
counter1 = null; // => null 할당하면 참조할 수 없어서 count 변수 접근 못함
// 의무적으로 null을 사용하지만, 문법적으로 무조건 사용해야하는건 아니다. undefined 사용 가능

// 불필요한 메모리가 쌓여 메모리 점유 증가함 => 가비지 컬렉션(사용하지 않는 메모리를 자동으로 정리하는 기능)
console.log(counter1()); // Assignment to constant variable.

const counter2 = outer();
console.log(counter2());

// -----------------------------------------------------------------------------------------------------
let data = null;
// API
const result = fetch("....");
data = result;

function createUser(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

let user = createUser("Kim");
console.log(user.getName());
user.setName("Park");
console.log(user.getName());
user = null;

let user2 = createUser("Park");
console.log(user2.getName());

// -----------------------------------------------------------------------------------------------------
// 내 입맛대로 정리!
// 클로저 -> 함수가 선언될 당시의 변수 환경을 기억하고 그 환경에 있는 변수에 나중에도 접근할 수 있는 함수
// 즉, 함수 + 그 함수가 참조하는 변수 환경
// 변수는 내부 함수에서만 접근 가능 (데이터 은닉)
// 가비지 컬렉션을 통해서 사용하지 않는 메모리 정리 꼭! 하기 (null)
// -----------------------------------------------------------------------------------------------------
