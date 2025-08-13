let level = 1;
function levelup() {
  level++;
}
levelup();
levelup();

// 변수가 보호되지 않는다.
// = 변수가 은닉되지 않는다.
level = 99; // 해커가 바꾸면?

levelup();
levelup();

console.log(level);

/*
전역 범위에 선언으로 인해 어디서든 접근 할 수 있게 된다.
그렇다면 함수에 선언하면?
매 번 함수 실행 컨텍스트가 생겨 각 컨텍스트의 level이 서로 관여하지 못한다.
level은 영원히 2가 될 것
*/

function levelup2() {
  let level2 = 1;
  level2 += 1;
  return level2;
}

let level2 = levelup2();
level2 = levelup2();
level2 = levelup2();
level2 = levelup2();
level2 = levelup2();

console.log(level2); // 여전히 2

/*
그렇다면 inner함수로 ?

[클로저]
함수가 자신이 선언된 렉시컬 환경을 기억해서 그 렉시컬 환경 밖에서 호출되어도 그 환경에 접근 가능
#데이터 은닉) 외부에서 데이터에 직접 접근 불가
#상태 유지) 함수 호출 간 변수를 계속 기억
*/

function levelup3() {
  let level3 = 0;

  function inner() {
    level3++;
    return level3;
  }
  return inner; // 함수를 자체를 반환하겠다. inner(); : 함수를 호출하겠다
}

// myLevelUp은 function inner()를 참조하는 중, levelup3가 inner함수 자체를 반환하고 있기 때문
// levelup3 함수의 렉시컬 환경이 inner에 의해 참조받고 있어서 콜스택에선 빠졌지만,
// 가비지 컬렉션은 수행되지 않는다.
const warriorLevel = levelup3();
let warriorLevelup = warriorLevel(); // level3 변수는 여전히 같은 값을 참조하고 있어서 level3 변수 증가
warriorLevelup = warriorLevel();
warriorLevelup = warriorLevel();
warriorLevelup = warriorLevel();
console.log(warriorLevelup);

// 정리: 콜스택에서는 빠졌지만 참조 받고 있기 때문에 가비지 컬렉션으로 인해 소멸되지 않는다.
// 이걸 [클로저] 현상 이라고 한다.

// 새로운 실행 컨텍스트와 렉시컬 환경 생성
// warrior의 렉시컬 환경과는 별개라 새로운 level3를 참조한다
// "클로저 함수끼리는 상태를 공유하지 않는다"
const archerLevel = levelup3();
let archer = archerLevel();
archer = archerLevel();
archer = archerLevel();
console.log(archer);
archer = null; // 메모리 누수를 방지하기 위해 메모리 해제를 작성

////////////////////////////////////////////////
/*
클로저가 만들어지는 조건?
- 함수가 자신의 상위 렉시컬 환경을 참조하고 있을 때, 상위 렉시컬 환경이 콜스택에서 사라져도 [가비지 컬렉션이 수행되지 않아] 상위 컨텍스트의 변수를 계속 참조할 수 있게 된다.
이 현상이 클로저 현상이다.
*/
