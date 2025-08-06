// 삼항 연산자
// 표현지 ? 참 : 거짓

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? '살수있다' : '살수없다';
console.log(buyAble);

// A, B, C, D, F
// 2개 이상, 2개부터
const score = 43;
const grade =
  score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F';
console.log(grade);
