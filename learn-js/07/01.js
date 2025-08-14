// 09. 클로저(closure)

// 예
let level = 1;
function levelup() {
  level++;
}

// levelup();
// levelup();

// console.log(level); //3

// 변수(level)가 보호/은닉 되지 않음
level = 99;

levelup();
levelup();

console.log(level); //101

// 보호하려면?
// 함수 내부에 만듦
function levelupB() {
  let levelB = 1;
  levelB++;
  return levelB;
}

let levelB = levelupB();
levelB = levelupB();
levelB = levelupB();
levelB = levelupB();

console.log(levelB);

// 함수 호출을 여러 번 해도 [levelB = levelupB()] 레벨은 1번만 오른다
// 왜? :: 실행콘텍스트 관점) level 은  let으로 선언, 값이 할당
// 함수 호출될 때마다 계속 호출되는거?, 함수 외부에

// ->
// 은닉은 가능, 레벨 선형 증가 불가능?

// **클로저
// 함수가 선언 될 떄의 렉시컬 스코프(=환경)를 기억하고, 그 스코프에 있는 변수에 접근할 수 있는 함수
// 클로저 -> 현상 / 클로저 함수 -> 클로저 현상을 직접적으로 실행하는 부분
// 가비지 컬렉션이 수행되지 못해서 메모리에 남아있는 상태 (왜 수행되지 않는지를 납득)

// 특징**
// 1. 데이터 은닉 : 외부에서 데이터에 직접 접근 가능
// 2. 상태 유지 : 함수 호출 간 변수를 계속 기억
function levelupC() {
  let level = 0;
  function inner() {
    // 클로저 함수
    level++;
    return level;
  }
  return inner; //return inner();은 완전히 다른 의미
  //
}

const warriorLevel = levelupC(); //
let warrior = warriorLevel();
warrior = warriorLevel();
warrior = warriorLevel();
warrior = warriorLevel();

console.log(warrior);

// 새 예
function outer() {
  let count = 0;
  return () => ++count; //클로저 함수
}
const counter1 = outer();
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter1()); //3
const counter2 = outer();
console.log(counter2()); //4 -> 1
console.log(counter2()); //5 -> 2

// 클로저 함수끼리는 상태 공유 X
// 왜 ::
