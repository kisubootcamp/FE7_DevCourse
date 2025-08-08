// 스코프(Scope), 변수가 유효한 범위
// 함수 스코프, 블록 스코프
// { }
function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

sum(10, 20);
console.log(result); // 접근이 안 돼서 에러가 나옴(블록 안에 있어서)
