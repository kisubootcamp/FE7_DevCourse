// Set

// 1. add() - 값 추가
// 2. delete(value) - 값 삭제
// 3. has(value) - 값 존재
// 4. clear() - 셋 초기화
// 5. size - 값 크기도 구할 수 있음
const set = new Set([1, 2, 3]); // 초기값 생성 가능

const user = { name: "kim" };
set.add(1);
set.add(1); // 중복 불가
set.add("kim");
set.add({});
set.add(user);

console.log(set);
const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)]; // 이런 식으로 중복된 값 제거 가능
console.log(copyNumArr);

set.delete(1);

for (const value of set) {
  console.log(value);
}
