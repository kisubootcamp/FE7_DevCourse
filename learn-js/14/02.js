// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(object)와 비슷해 보이지만, 차이점이 있다.
// 1. object 객체의 키로 문자열이나 심볼만 사용 가능
// 1.1. 맵 객체는 모든 값을 키로 사용할 수 있다.
// 2. 삽입 순서를 그대로 유지
// 3. .size 프로퍼티를 가지고 있어, 맵에 저장된 요소의 개수를 알 수 있다.

// map 객체
// set(key, value) : 키와 값을 추가
// get(key) : 키에 해당하는 값을 반환
// has(key) : 키가 존재하는지 확인
// delete(key) : 키와 값을 삭제
// clear() : 모든 키와 값을 삭제

const user = {
  true: "true",
};
console.log(user.true); // true

const map = new Map();
map.set("name", "kim");
map.set("name", "park"); // 키 값은 고유해야 하므로 kim을 park로 덮어씀
map.set(1, "age");
map.set(true, "1");

console.log(map);

const user2 = { name: "kim" };
const map2 = new Map();
map2.set(user2, "kim"); // 객체를 키로 사용 가능
const copyUser = { ...user2 }; // 앝은 복사
map2.set(copyUser, 1);

console.log(map2);
console.log(map2.get({ name: "kim" })); // undefined
console.log(map2.get(user)); // undefined

console.log(map2.has(user2)); // true
console.log(Object.hasOwn(map2, user2)); // false

map2.clear(); // 모든 키와 값 삭제
console.log(map2.size); // 0
console.log(map2); // Map(0) {}

// 객체는 for of 로 순회X, for in으로 순회 가능
// Map은 for of로 순회 가능
for (const key in map) {
  console.log(key, map[key]); // Map은 for in으로 순회 불가
}
for (const [key, value] of map) {
  console.log(key, value);
}

map.forEach((value, key) => {
  console.log(key, value);
});

//

const map3 = new Map([
  ["name", "kim"],
  ["age", 20],
]);
console.log(map3);
