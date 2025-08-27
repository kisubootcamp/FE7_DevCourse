// 자바스크립트 ES6
// 계산된 속성(Computed Property Names)
// 객체의 속성 이름을 고정된 문자열이 아닌, 표현식의 결과값으로 (동적으로) 설정하는 기능

// 객체 리터럴 안에서 대괄호([]) 표기법으로 표현식 결과를 키로 사용하는 기능
// 주로 동적인 키 생성이나 변수/상수 값을 객체 key로 사용하고자 할 때 유용

const key = "name";
const user = {
  name: "kim",
  age: 20,
  [key + "a"]: 20,
};

console.log(user);

//

function makeUser(propName, value) {
  return {
    [propName]: value,
  };
}
const users = makeUser("name", "kim");
console.log(users);
