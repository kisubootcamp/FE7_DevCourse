// 자바스크립트 ES6
// 계산된 속성(Computed Property Names)
// 객체의 속성 이름을 고정된 문자열이 아니라, 표현식의 결과값으로 동적으로 지정하는 기능을 말함

const key = "age";
const user = {
  name: "kim",
  [key + "a"]: 20,
};

console.log(user);

function makeUser(propName, value) {
  return {
    [propName]: value,
  };
}
const users = makeUser("name", "kim");
console.log(users);
