// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name: 'age', age: 20 };
const jsonUser = JSON.stringify(user); // 객체를 문자열로
console.log(typeof jsonUser);
console.log(jsonUser);

const parseUser = JSON.parse(jsonUser); // 문자열을 다시 객체로
console.log(typeof parseUser);
console.log(parseUser);

const jsonStr = JSON.stringify(10);
const parseJson = JSON.parse(jsonStr);
console.log(typeof parseJson);
console.log(parseJson);
