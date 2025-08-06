// 삼항 연산자
// 표현식 ? 참 : 거짓
// : (콜론)  ; (세미콜론)
const myMoney = 5000;
const price = 3000;
const buyAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble); // 이것처럼 간단하게 참 거짓처럼 나올때만 사용

const score = 78;
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
console.log(grade); // 실무적인 관점에서 삼항연산자는 2중첩이상 X

const num = 5;
const res = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(res);

const a = 3;
const b = 5;
const c = 6;
