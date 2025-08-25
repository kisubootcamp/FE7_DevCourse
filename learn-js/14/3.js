// Set
// 중복되지 않는 값들의 집합을 저장하는 자바스크립트 내장 객체
// 같은 값을 여러 번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억함
// 값의 종류에 제한이 없음

// 1. add() - 값 추가
// 2. delete(value) - 값 삭제
// 3. has(value) - 값 존재 확인
// 4. clear() - 셋을 비움

const user = { name : "kim"};
const set = new Set([1, 2, 3, 1, 2, 3]);
set.add(1);
set.add("kim");
set.add({});
set.add(user);
set.add(user);
set.delete(1);

for (const value of set) {
    console.log(value);
}

console.log(set);
console.log(set.has(1)); // false
console.log(set.has(2)); // true

set.clear();
console.log(set);
console.log(set.size);

// 중복된 값 제거
const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)];
console.log(copyNumArr);

