// Set
// 중복되지 않는 "값" 들의 집합을 저장하는 자바스크립트 내장 객체
// mdn 문서 상세 참고

// (1) 특징
// 같은 값을 여러 번 넣어도 한 번만 저장
// 값의 삽입 순서를 기억
// 값의 종류에는 제한 없음

// (2)
// add() -> 값 추가
// delete(vlaue) -> 값 삭제
// has(vlaue) -> 값 존재 여부 확인
// clear() -> 셋 비우기
// size
const set = new Set();
set.add(1);
set.add(1); // 중복 추가 불가
set.add("kim");
set.add({});

console.log(set);

const user = { name: "kim"};
const set2 = new Set2([1,2,3]);
// set2.delete(1);
// set2.clear();
// console.log(set2.size);
for (const value of set2)  {
  console.log(value);
}
// forEach도 가능