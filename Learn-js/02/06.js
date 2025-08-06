// 삼항 연산자
// 표현식 ? 참 : 거짓

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? "ok" : "no";
console.log(buyAble);

const score = 57;
const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade);
