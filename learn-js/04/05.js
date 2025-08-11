//return 써보기
function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

const a = 10;
const b = 20;
const result = sum(a, b);

console.log(`a와 b의 합은? = ${result}`);

//화살표 함수 내에 return 생략

const sum = function sum(num1, num2) {
  return num1 + num2;
};

//위는 아래와 같다
const sum2 = (num1, num2) => num1 + num2;

//객체 리턴
const returnValue = () => ({ name: "sucoding" });
