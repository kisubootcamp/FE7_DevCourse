// Set
// 중복되지 않는 값들의 집합을 저장하는 자바스크립트 내장 객체
// 같은 갑을 여러번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

// 1. add() -> 값 추가
// 2. delete(value) -> 값 삭제
// 3. has(value) -> 값 존재?
// 3. clear() -> 셋 비우기

const set = new Set();
set.add(1);
set.add(1); // 같은 값이 중복으로 추가되지 않는다.
set.add("kim");
set.add({});
// console.log(set);
// set.clear();
// console.log(set);

//for ~ of 사용
for (const value of set) {
  console.log(value);
}

//forEach도 있다.
set.forEach((value) => {
  console.log(value);
});

const user = { name: "kim" };
const set1 = new Set([1, 2, 3, 4, 5, 6]);
console.log(set1);
console.log(set1.has(2));

const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)]; // 이 경우 Set 인스턴스 객체로 취급하지 않음
console.log(copyNumArr);
