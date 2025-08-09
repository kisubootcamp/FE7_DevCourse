// 스코프(Scope), 변수가 유효한 범위
// 함수 스코프, 블록 스코프(ES6, let const)
// { }
function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
  {
    var x = 10;
  }
  console.log(x);
}
sum(10, 20);
// console.log(result);
