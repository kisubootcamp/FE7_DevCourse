// JSON 문자열
// 자바스크립트 객체를 문자열로 표현하는 방법
// 네트워크는 객체를 인식하지 못하므로, 누구나 인식할 수 있는 문자열로 변환해야 한다.

const user = {
  name: "Lee",
  age: 30,
  greet() {
    return `Hello, ${this.name}`;
  },
};

// JSON.stringify() 메서드
const jsonUser = JSON.stringify(user);
console.log(typeof jsonUser); // string
console.log(jsonUser); // {"name":"Lee","age":30,"greet":{}}

const parseUser = JSON.parse(jsonUser);
console.log(typeof parseUser); // object
console.log(parseUser); // { name: 'Lee', age: 30 }
