// 객체 순회와 조작
// 1. 객체 순회 방법 - for ... in
// 자신 + 상속된 열거 가능한 프로퍼티 모두 순회
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}
// name John
// age 30

// 2. Object.keys(obj)
// 객체의 직접 소유한 열거 가능한 프로퍼티 이름 배열 반환
Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

// 3. Object.values(obj)
// 직접 소유한 열거 가능한 프로퍼티 값 배열 반환
Object.values(person).forEach((value) => {
  console.log(value);
});

// 4. Object.entries(obj)
// 직접 소유한 [키, 값] 쌍 배열 반환
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

// ex1)
