/*
function sayHello() {
  console.log("Hello, 함수 선언식!");
}
sayHello();

const greet = function greet() {
  console.log("Hello, 함수 표현식!");
};
greet();

const add = (a, b) => {
  return a + b;
};
console.log(add(3, 7));

const age = (a) => {
  //매개변수
  if (a >= 20) return "성인입니다.";
  else return "미성년자입니다.";
};
console.log(age(25));
console.log(age(19));
//인자, 인수

(() => {
  console.log("나는 즉시 실행됨!");
})();

function sum(num1, num2) {
  return a + b;
}
const res = add(3, 7);
console.log(res);
*/

const result = function (num1, num2) {
  return num1 + num2;
};
const sum = result(10, 20);
console.log(sum);
