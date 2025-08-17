// 함수표현식 (익명함수)
const sum = function (num1, num2) {
  return num1 + num2;
};

// 화살표 함수
const sum1 = (num1, num2) => num1 + num2;
console.log(sum1(1, 2));

const returnValue = () => ({ name: 'junyoung' });
console.log(returnValue());
