//나머지 매개변수 (ES6)
//...스프레드 연산자
//주의점: 나머지 매개변수는 맨 뒤에 위치해야한다, 2개 지정 불가능하다.
//나머지 매개변수에 배열이 들어오면 배열 안의 배열이 된다.
function sum(...nums) {
  console.log(nums);
}

sum(10, 20, 30, 40);

//스코프(Scope), 변수가 유효한 범위
//함수 스코프(변수가 함수 내에서 유효), 블록 스코프(변수가 블록 내에서 유효, ES6)
function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);

  {
    let x = 10;
  }
}

sum(10, 20);
//console.log(result); //오류

function sum(num1, num2) {
  return; // undefined
  console.log("dddd");
}
const a = 10;
const b = 20;

const result = sum(a, b);
console.log(`a와 b의 합은 = ${result}`);
