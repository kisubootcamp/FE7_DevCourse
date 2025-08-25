// Map
// 키-값 쌍ㅇㄹ 저장하는 자바스크립트 내장 객체
// 자바스크립트 객체(object)와 비슷해보이지만 차이점이 있음
// object 객체의 키로 문자열이나 심볼만 사용이 가능
// map    모든 값을 키로 사용이 가능
//        삽입 순서를 그대로 유지하고, .size 속성도 제공

const map = new Map();
map.set("name", "kim");
map.set("name", "park"); // 덮어씌워짐
map.set(1, "age");
map.set(true, "1");
console.log(map); // Map(3) { 'name' => 'park', 1 => 'age', true => '1' }

const user = {
	true: "true",
};

map.set(user, 1);

console.log(map); // Map(4) {
//                     'name' => 'park',
//                     1 => 'age',
//                     true => '1',
//                     { true: 'true' } => 1
//                   }

// map 객체
// set(key, value) -> 값을 세팅
// get(key) -> 값을 가져옴
// has(key) -> 값의 존재여부 확인가능
// delete(key) -> 키 삭제
// clear() -> 맵 객체 아예 삭제

const us = { name: "park" };
const copyUs = { ...user }; // 스프레드 연산자는 얕은복사 (...)
const mapp = new Map();
mapp.set("name", "kim");
mapp.set(user, 1);
mapp.set(copyUs, 1);

// 맵 객체의 경우 delete, clear를 통해서만 키 삭제 가넝

// 이터러블한 객체 (iterable)
// 배열, map, set

const map3 = new Map();
mapp.set("name", "kim");
mapp.set("age", 20);

for (const [k, v] of map) {
	console.log(k, v);
}
for (const [k, v] of map.entries()) {
	console.log(k, v);
}
for (const key of map.keys()) {
	console.log(key);
}
for (const value of map.values()) {
	console.log(value);
}
map.forEach((v, k, m) => {
	console.log(v);
	console.log(k);
	console.log(m);
});

// 초기값 지정
const map23 = new Map([
	["name", "kinm"],
	["age", 20],
]);
