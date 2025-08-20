// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name: "age", age: 20 };
const jsonUser = JSON.stringify(user); // JSON 문자열로 변환하는 메서드
console.log(typeof jsonUser); // stringi
console.log(jsonUser); // 텍스트

const parseUser = JSON.parse(jsonUser); // 객체로 다시 변환하는 메서드
console.log(typeof parseUser);
console.log(parseUser);

const jsonStr = JSON.stringify(10);
const parseJson = JSON.parse(jsonStr);
console.log(typeof jsonStr);
console.log(typeof parseJson);
