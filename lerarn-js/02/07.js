// 삼항 연산자
// 표현식 [ ? 참 : 거짓 ]
// : (콜론)
// ; (세미 콜론)
const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble);

// "A", "B", "C", "D"
// 이상, 이하, 초과, 미만
// 2개 이상, 2개 부터
const score = 58;
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
