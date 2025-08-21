// 래퍼 객체(wrapper object)
// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol(ES6)
// bigint -> BigInt(ES11)
// 이렇게 자동으로 래핑 되는 것
// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체

// .toFixed(숫자) : 소숫점을 얼마까지 날릴지 결정하는 것
const num = 0.12;
console.log(num.toFixed(5));
console.log(new Number(10).toFixed(1));

// 얘네들은 다 같은 의미
const num1 = 10;
const numFromObj = new Number(10);
console.log(numFromObj + 10); // 객체인 것 같아도 10으로 바뀜 이렇게 다른 거 더하고 그러면

const str = "A";
const strFromObj = new String("A");

const bool = true;
const boolFromBoolean = new Boolean(true);
