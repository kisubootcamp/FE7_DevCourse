/*
levelup은 콜스택에서 제거된 상태
가비지컬렉션에 의해 메모리를 제거해야 함
- inner를 리턴하는데, inner가  콜스택에서 제거된 levelup의 변수 level을 참조해야됨
- 메모리를 제거하지 않고 변수의 참조가 완전히 없어질 때 까지 남아있음

>>> 클로저
함수가 선언 될 때의 렉시컬 스코프(환경)을 기억하고, 
그 스코프에 있는 변수에 접근할 수 있는 함수

아래에선 inner가 클로저 함수


*/

function levelUp() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }

  return inner;
}

const wariorlUp = levelUp();
let warior = wariorlUp;
warior = wariorlUp();
warior = wariorlUp();
warior = wariorlUp();

console.log(wariorlUp);
console.log(warior);

