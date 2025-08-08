function sum(num1, num2) {
  return num1 + num2;
}

const a = 10;
const b = 20;

console.log(sum(a, b));

console.log(() => ({ name: "jiho" })); // 객체 리턴은 중괄호로 감싼다
//return; => undefined 리턴함
