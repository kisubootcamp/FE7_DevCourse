// 삼항 연산자
// 표현식 ? 참 : 거짓

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? '살 수 있다' : '살 수 없다.';
console.log(buyAble);

// "A", "B", "C", "D"
const score = 78;
const grade =
  score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'E'; // 실무적으로 가독성이 떨어지기에 삼항연산자는 중첩하지 않음.
console.log(grade);
