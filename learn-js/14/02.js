// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(object)와 비슷해 보이지만, 차이점이 있습니다.
//  1. object 객체의 키로 문자열이나 심볼만 사용 가능
//  1.1 맵 객체는 모든 값을 키로 사용할 수 있음.
//  2. 삽입 순서를 그대로 유지
//  3. .size 속성도 제공

const obj = { name: "age" };
//console.log("age" in obj);
//console.log(Object.hasOwn(obj, "name"));

const user = { name: "kim" };
const copyUser = { ...user };
const map = new Map();
map.set("name", "kim");
map.set(user, 1);
map.set(copyUser, 1);

console.log(map.size);

//  2.1 set(key, value) -> 값을 세팀함
//  2.2 get(key) -> 값을 가져옴
//  2.3 has(key) -> 값의 존재 여부 확인 가능
//  2.4 delete(key) -> 키를 삭제
//  2.5 clear() -> map 객체를 초기화
//  2.6 .size
//  const user = {name: "kim"};
//  const copyUser = {...user}; //JSON.parse(JSON.striginfy(user)), structedClone(user)

//이터러블한 객체(iterable)
//const map = new Map();
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

map.forEach((value, key, map) => {
  console.log(value);
  console.log(key);
  console.log(map);
});

console.log(map);
