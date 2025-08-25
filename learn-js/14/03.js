// Set
// 중복되지 않는 값들의 집합을 저장하는 자바스크립트 내장객체
// 값을 여러번 넣어도 값이 같다면 한번만 저장
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

const user = new Set();
// 1. 값 추가 add()
user.add(1);
user.add("kim");
user.add({});
console.log(user); // Set(3) { 1, 'kim', {} }

const set = new Set([1, 2, 3, 21, 2, 1]);
console.log(set); // Set(4) { 1, 2, 3, 21 }
// 2. 값 제거 delete(value)
set.delete(21);
console.log(set); // Set(3) { 1, 2, 3 }
// 3. 값 존재 has(value)
console.log(set.has(2)); // true
// 4. 값 싸그리 제거 clear()
// set.clear();

// 중복값 제거하기
const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)];

for(const value of set) {
  console.log(value)
}