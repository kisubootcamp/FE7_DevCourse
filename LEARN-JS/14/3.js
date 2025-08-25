// Set
// 중복되지 않는 값들의 집합을 저장하는 자바사크립트 내장 객체
// 같은 값을 여러번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

// 1. add() - 값 추가
// 2. delete(value) - 값 삭제
// 3. has(value) - 값 존재
// 4. clear() - 셋을 비움
const user = { name: 'kim' };
const set = new Set([1, 2, 3, 1, 2, 3]);
// set.delete(1);
// set.clear();
// console.log(set);

for (const value of set) {
  console.log(value);
}

const numArr = [1, 2, 3, 4, 5, 2, 3];
const copyNumArr = [...new Set(numArr)];
// console.log(copyNumArr);
