// 삼항 연산자
// 표현식 ? 참 : 거짓
// : (콜론)
// ; (세미콜론)

const myMoney = 1000;
const price = 500;

const buyAble = myMoney >= price ? "살 수 있습니다." : "살 수 없습니다.";
console.log(buyAble); // '살 수 있습니다.'

const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // 'B'
