// Set
// 중복되지 않는 값들의 집합을 저장하는 자바스크립트 내장 객체
// 같은 값을 여러번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

// 1. add() - 값 추가
// 2. delete() - 값 삭제
// 3. has() - 값 존재 여부 확인
// 4. clear() - 모든 값 삭제
// 5. size - 저장된 값의 개수
const set = new Set();
set.add(1);
set.add("kim");
set.add({});

console.log(set);

const set2 = new Set([1, 2, 3, 1, 2, 3]);

const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)]; // 중복 제거
console.log(copyNumArr); // [1, 2, 3]

for (const value of set2) {
  console.log(value); // 1, 2, 3
}
