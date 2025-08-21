// JSON
// 자바스크립트 객체를 텍스트 형식으로 표현

const user = { name: "age", age: 20 };
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); // string
console.log(jsonUser); // {"name":"age","age":20}


const parseUser = JSON.parse(jsonUser); // json 문자열로 변환한 원래 타입이 복원됨
console.log(typeof parseUser); // object
console.log(parseUser); // { name: 'age', age: 20 }

