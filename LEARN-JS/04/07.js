// function sum(num1, num2) {
//   // 리턴을 만나면 함수는 그 즉시 종료
//   return num1 + num2;
// }

// const a = 10;
// const b = 20;
// const result = sum(10, 20);

// console.log(`a와 b의 합은 = ${result}`);

const sum = (num1, num2) => {
  return num1 + num2;
};

const sum2 = (num1, num2) => num1 + num2;

// 직관적
const returnValue = () => ({ name: 'hyunjun' });
console.log(returnValue());
