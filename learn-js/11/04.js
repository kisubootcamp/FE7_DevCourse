//JSON
//자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = {name: "age", age:20};
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); //string
console.log(jsonUser);

const parseUser = JSON.parse(jsonUser); //stringify 전 타입으로 변환
console.log(typeof parseUser); //object
console.log(parseUser);

const jsonStr = JSON.stringify(10);
console.log(typeof jsonStr); //string
console.log(jsonStr);
const parseStr = JSON.parse(jsonStr);
console.log(typeof parseStr); //int
console.log(parseStr);
