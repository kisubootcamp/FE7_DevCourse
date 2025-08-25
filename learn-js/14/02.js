// Map 
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체(object)와 비슷해 보이지만, 차이점이 있습니다.
// 1. object 객체의 키로 문자열이나 심볼만 사용 가능
// 1.1 맵 객체는 모든 값을 키로 사용할 수 있음
// 2. 삽입 순서를 그대로 유지
// 3. .size 속성도 제공

// (1)

// 모든 객체의 키는 문자열이 됨
// ㄴ true, 1에 커서를 대보면 string
const user2 = {
  true: "true",
  1: "true",
};
console.log(user2.true);

// 맵 객체
// 모든 값을 키로 활용 가능
const user = { name: "kim"};
const copyUser = { ...user}; // 새껍데기 안에 기존 객체를 스프레드(전개) 연산자로 전개했을 뿐, 같은 내용이여도 다른 것으로 인식
// 껍데기와 달리 내용물을 새로운거로 만들지는 않음 (얕은 복사) - (깊은 복사가 아님을 유의)
const map = new Map();
map.set("name", "kim"); // set 메서드를 통해 값을 지정
// map.name = "kim"; 과 다름
map.set(1, "age");
map.set(true, "1");
map.set(true, "1"); // 중복된 값은 자동 생략, 고유성, 같은 키의 값은 하나만 저장 (나중 것)
map.set(user, 1); // 객체를 키로 사용할 수 있음
map.set(copyUser, 1);

map.clear(); // 초기화
console.log(map);
console.log(map.get(user)); //1 // get 메서드 사용
console.log(map.has(user)); //true -> user로 세팅된 키가 있으므로
// ㄴ "key" in 객체, Object.hasOwn(객체, "key") :: 와 유사함
// console.log("age" in obj);
console.log(Object.hasOwn(map, "name")); // 맵객체의 경우 불가능, 그래서 따로 has 라는 전용 메서드 존재


// 결론
// < map 객체 >
// set(key, value) -> 값을 세팅
// get(key) -> 값을 가져옴
// has(key) -> 값의 존재 여부 확인 가능
// delete(key) -> 키를 삭제
// clear() -> 맵 객체 초기화
// size -> 

// (2) 순회

// 이터러블한(iterable) 객체 (순회 가능 객체) :: 배열, map, set
// 객체는 for of 순회 불가, 맵객체는 가능
const mapp = new Map([
  ["name", "kim"],
  ["age", 20],
] // 초기값 지정 가능
);
mapp.set("name", "kim");
mapp.set("age", 20);

for (const key of mapp.keys()){
  console.log(`key: %{key}, value: ${mapp.get(key)}`);
}
for (const key of mapp.vlaues()){
  console.log(value);
}
for (const [k,v] of mapp.entries()){
  console.log(k,v);
}
for (const [k,v] of mapp){
  console.log(k,v);
}
mapp.forEach(value, key, map => {
  console.log(value);
  console.log(key);
  console.log(map);
});

  console.log(mapp);