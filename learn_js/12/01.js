// 래퍼 객체(wrapper object)
// string -> String()
// number -> Number()
// boolean -> Boolean()
// symbol -> Symbol(ES6)
// bigint -> BigInt(ES11)

const num = 10;
const numFromObj = new Number(10);

const str = 'A';
const strFromObj = new String('A');

console.log(str == strFromObj);
console.log(str === strFromObj);

console.log(typeof strFromObj);

const boolean = true;
const boolfromBoolean = new Boolean(true);

// // 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체
// const num = 10.12; // 래퍼객체로 감싸서 처리 후 래퍼객체 버려짐. (자동으로 이 과정을 수행.)
// console.log(num.toFixed(5));
// console.log(new Number(10).toFixed(1));

// const abc = 'a.b.c'; // ???
// console.log(abc.split('.'));
