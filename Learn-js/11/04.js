// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name: "age", age: 20 };
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); // string
console.log(jsonUser);

const parseUser = JSON.parse(jsonUser); // object
console.log(typeof parseUser);
console.log(parseUser);
