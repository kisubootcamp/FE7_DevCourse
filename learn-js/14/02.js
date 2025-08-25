//Map
//키-값 쌍을 저장하는 자바스크립트 내장 객체
//object: 키로 문자열이나 심볼만 사용 가능
/*map: 키로 모든 값을 사용할 수 있음
    ㄴ 삽입 순서를 그대로 유지
    ㄴ .size 속성도 제공
*/
const map = new Map();
map.set("name", "kim");
map.set("name", "park"); // 같은 key 값은 하나만 저장

// key값이 같아도 메모리 주소가 다르면 중복 됨
const user = { name: "kim" };
const copyUser = { ...user };
map.set(user, 1);
map.set(copyUser, 1); // user와 copyUser는 key값은 같지만 주소는 서로 다르다

map.set(1, "age"); // 문자열 아니어도 key로 사용
console.log(map);

// map 객체
// get
// set
// has
// size

// iterable한 객체
const map2 = new Map();
map2.set("a", 2);
map2.set("b", 3);

for (const [k, v] of map2) {
  console.log(k, v);
}

for (const key of map2.keys()) {
  console.log(key);
}

for (const value of map2.values()) {
  console.log(value);
}
