// Map 객체

// 모든 객체는 숫자로 키를 줘도, 문자열로 결국 변함
// const user = {
//   1: "true",
// };

// Map은 다름
// const map = new Map();

//값 세팅
map.set("name", "kim");
// map.name = "kim" 이런 식으로 객체처럼 지정하지는 않음
map.set(1, "age"); // 문자열로 변하지 않고 1 number 그대로 저장됨
map.set("name", "park"); // 여러개 넣어도 같은 키의 값은 하나만 저장됨
const user = { name: "kim" }; // 같은 값일지라도 메모리가 다르기 때문에 저장이 되는 것
const copyUser = { ...user }; // 얘는 얕은 복사(껍데기는 달라 보여도 속은 같음),얘랑 위랑 값이 같을지라도 메모리는 달라서 같은 값 저장
map.set(user, 1); // 같지만 저장됨
map.set(copyUser, 1); // 얘랑
// .get으로 출력
console.log(map.get("name")); // 키 값을 넣어서 get으로 출력, 또는 지정한 변수 이름 넣어서 출력
// .has로 키 유무 확인
console.log(map.has(1));

// .delet으로 삭제 가능
map.delete("name");
// .clear 초기화 시키는 것
map.clear();
// .size를 통해서 크기 구함
console.log(map.size);

// 이터러블 객체
// 배열 ,map, set
const map = new Map([["name", "kim"][("age", 20)]]); // 이런 식으로 초기값 구성도 가능
map.set("name", "kim");
map.set("age", 20);

for (const key of map.keys()) {
  console.log(key, map.get(key));
}

for (const value of map.values()) {
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
