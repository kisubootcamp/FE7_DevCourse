// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(Object)와 비슷해 보이지만, 다음과 같은 차이점이 있음.
// 1. Object 객체의 키로 문자열이나 심볼만 사용 가능
// 1.1 맵 객체는 모든 값을 키로 사용 가능함
// 2. 삽입 순서를 그대로 유지
// 3. .size 속성도 제공함

// 2. map 객체
// 2.1 set(key, value) -> 값을 세팅함
// 2.2 get(key) -> 값을 가져옴
// 2.3 has(key) -> 값의 존재 여부 확인 가능
// 2.4 delete(key) -> 키를 삭제
// 2.5 clear() -> map 객체를 초기화
// 2.6 .size
const user = { name: "kim" };
const copyUser = {...user}; // JSON.parse(JSON.stringify(user)), structuredClone(user)

const obj = { name : "age" };
console.log("age" in obj); // false
console.log(Object.hasOwn(obj, "name")); // true

// 이터러블한 객체(iterable)
// 배열, map, set

const map = new Map([
    ["name", "kim"],
    ["age", 20],
]);
map.set("name", "kim");
map.set("age", 20);
map.set(user, 1);
map.set(copyUser, 1);
// map.set(1, "age");
// map.set(true, "1");

for (const key of map.keys()) {
    console.log(`key: ${key}, value: ${map.get(key)}`);
}

for (const value of map.entries()) {
    console.log(value);
}

for (const [k, v] of map) {
    console.log(k, v);
}

map.forEach((value, key, map) => {
    console.log(value);
    console.log(key);
    console.log(map);

});


console.log(map); // Map(3) { 'name' => 'kim', { name: 'kim' } => 1, { name: 'kim' } => 1 }
// 같은 키의 값은 하나로 고유해야 함
console.log(map.get(user)); // 1

console.log(map.has(user)); // true
console.log(Object.hasOwn(map, "name"));

map.delete("name");
console.log(map);
console.log(map.size);

