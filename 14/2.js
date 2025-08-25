// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(object)와 비슷해 보이지만, 차이점이 있다.
// 1. object는 객체의 키로 문자열이나 심볼만 사용 가능
// 1.1 Map 객체는 모든 값을 키로 사용할 수 있음.
// 1.2. 삽입 순서를 그대로 유지
// 1.3. .size 속성 : 요소의 개수를 반환하는 메서드

// 2. map 객체
// 2.1 set(key, value) -> 값을 세팅함
// 2.2 get(key) -> value 값을 가져옴
// 2.3 has(key) -> 값의 존재 여부 확인 가능
// 2.4 delete(key) -> key를 삭제할 때 사용
// 2.5 size(key) -> Map 객체의 사이즈를 반환

// const user = { name: "kim" };
// const copyUser = { ...user }; // JSON.parse(JSON.stringify(user)), structedClone(user)

// 이터러블한 객체(iterable)
// 배열, map, set
const map = new Map([
  ["name", "kim"],
  ["age", 20],
]);

map.set("name", "kim");
map.set("age", 20);

for (const key of map.keys()) {
  console.log(`key: ${key}, value: ${map.get(key)}`);
}

for (const value of map.values()) {
  console.log(value);
}

for (const [k, v] of map.entries()) {
  console.log(k, v);
}

for (const [k, v] of map) {
  console.log(k, v);
}

map.forEach((v, k, map) => console.log(v, k, map));
