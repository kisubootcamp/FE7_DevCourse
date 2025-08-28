// 자바스크립트 ES6
// 계산된 속성(Coputed Property Names)
// 객체의 속성 이름(key)을 고정된 문자열이 아니라, 표현식의 결과겂으로 동적으로 지정하는 기능을 말함

// 객체 리터럴 안에서 대괄호 표기법으로 표현식 결과를 키로 사용하는 기능
// 주로, 동적인 키 생성이나 변수/상수 값을 객체 키로 바로 넣고 싶을 때 활용
const key = "age";
const id = Symbol("id"); // 심볼값도 가능, 절대로 중복되지 않는 객체 키를 유한 생성 가능, 값 할당 필수
const user = {
  [id]: 1,
  name: "kim",
  [key + "a"]: 20,
};

console.log(user);
console.log(user[id]);

function makeUser(proName, value){
  return {
    [proName]: value,
  };
}

const users = makeUser("name", "kim");
console.log(users);