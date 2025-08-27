// Map
// 키-값 쌍을 저장하는 자바스크립트 내장 객체
// 자바스크립트의 객체와 비슷해 보이지만, 차이점 존재
// 1. object 객체의 키로 문자열이나 심볼만 사용 가능
// 1.1 맵 객체는 모든 값을 키로 사용 가능
// 1.2 삽입 순서를 그대로 유지

// 2.. map 객체
// 2.1 set(key, value) => 값을 세팅
// 2.2 get(key) => 값을 가져옴
// 2.3 has(key) => 값의 존재 여부 확인 가능
// 2.4 delete(key) => 키 삭제
// 2.5 clear => 객체 초기화
// 2.6 size => map 크기

const user = { name: "kim" };
const copyUser = { ...user }; // 얕은 복사
// 깊은 복사 => JSON.parse(JSON.stringify(user)), structuredClone(user)
const map = new Map();
map.set("name", "kim");
map.set(user, 1);
map.set(copyUser, 1);

// 이터러블한 객체(iterable)
// 배열, map, set
const map2 = new Map([
  ["name", "kim"],
  ["age", 20],
]);
