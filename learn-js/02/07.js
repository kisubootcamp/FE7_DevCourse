// 삼항 연산자
// 표현식 ? 참: 거짓
// : (콜론)
// ; (세미콜론)

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble);

// "A", "B", "C", "D"
const score = 96;
const grade = score >= 90
    ? score > 95
    ? "A+"
    : "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade);