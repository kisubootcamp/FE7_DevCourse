//JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name: "jiho", age: 20 };
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); // string
console.log(jsonUser);

const parseUser = JSON.parse(jsonUser); // JSON stringify로 변환하기 전, 원래 타입으로 다시 변환
console.log(typeof parseUser); // object
console.log(parseUser);
