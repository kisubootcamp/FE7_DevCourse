//자바스크립트는
// 함수 스코프, 블록 스코프 를 사용함
//블록 밖에선 호출 X

function sum(num1, num2) {
  return num1 + num2; // return 을 사용하면 스코프 밖으로 보냄
} // return을 만나면 함수는 즉시 종료

const a = 10;
const b = 20;

const result = sum(a, b); // return을 사용해도 변수에 담아야함

console.log(`a와 b의 합은 = ${result}`);
