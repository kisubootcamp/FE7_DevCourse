// 스코프 , 변수가 유효한 범위
// 함수 스코프, 블록 스코프
function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}
sum(10, 20);
//console.log(result); // result is not defined

// ------------------------------------------------
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(20, 30));

const add1 = add(30, 40);
console.log(add1);

const a = 10;
const b = 20;

const result = add(a, b);
console.log(`a와 b의 합은 : ${result}`);
