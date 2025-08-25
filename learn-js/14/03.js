//set
// 중복되지 않는 값들의 집합을 저장하는 자바스크립트 내장 객체
// 같은 값을 여러번 넣어도 한 번만 저장됨
// 값의 삽입 순서를 기억
// 값의 종류에는 제한이 없음

//add
const user = { name: "kim" };
const set = new Set([1, 2, 3]);
console.log(set);
set.add(user);
console.log(set);

// 중복된 값을 제거하라
const numArr = [1, 2, 1, 2, 3];
const copyNumArr = [...new Set(numArr)];
console.log(copyNumArr);
