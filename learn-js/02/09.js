// & -> 앤드 기호, 앰퍼센드
// | -> 짝대기, 파이프
// 앤드 연산자, &&
// 오알 연산자, ||
// 부정 연산자, !

// && 연산자는 모든 항이 참이어야 함


const ex1 = 10 < 20 && 10 < 15; // true
const ex2 = 10 > 20 && 10 < 15; // false;
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // false

const ex4 = 10 > 20 && dsdjkfjkdsj;
console.log(ex4);

const ex5 = 10 < 0 || 10 < 20; // true
console.log(ex5);
const ex6 = 10 < 20 || sdjfkjdfjskf;
console.log(ex6);

// 코드의 가독성을 높이는 노력을 해야 함
const ex7 = (10 < 20 && 10 < 15) || 10 < 0 || (true & false && true) || true; // true
console.log(ex7);

const ex9 = !(10 < 20); // false
const ex10 = !10 < 20; // true
// false -> 0 < 20
console.log(ex9, ex10);

// 팁
const x = 10; // true
console.log(!!x);