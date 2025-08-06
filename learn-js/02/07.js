// 삼항 연산자
// 표현식 ? 참 : 거짓

const money = 5000;
const price = 3000;

const buyAble = money >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble);

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);
