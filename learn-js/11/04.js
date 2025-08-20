// JSON
// 자바 스크립트 객체를 텍스트 형식으로 표현하는 방법
// 객체를 잘 사용하는데 자바스크립트가 아닌 네트워크 등은 모를 수도 있음 -> 그래서 텍스트 형식(JSON문자열)으로 바꿔줌

// 객체 -> 문자열
const user = { name: "age", age: 20};
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); //string, 객체 처럼 생긴 문자열

// 문자열 -> 객체
const parseUser = JSON.parse(jsonUser);
console.log(typeof parseUser); //object

/////////
// 이것저것 넣어서 시도해보자
const jsonStr = JSON.stringify(10);
console.log(typeof jsonStr); 
const parseStr = JSON.parse(jsonStr);
console.log(typeof parseStr); 