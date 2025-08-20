// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현하는 방법

const user = { name: "age", age: 20 };
const jsonUser = JSON.stringify(user); //객체처럼 보이지만 문자열임
const parseUser = JSON.parse(jsonUser); // 원래 자료형으로 다시 넘겨주는 것