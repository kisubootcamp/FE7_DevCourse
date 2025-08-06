// 논리 연산자
// & -> 앰퍼샌드
// | -> 파이프
// AND &&
// OR ||
// NOT !

const ex1 = 10 < 20 && 10 < 15; // false
const ex2 = 10 > 20 && 10 < 15; // true
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // false

const ex4 = 10 > 20 && "lllllll"; 
console.log(ex4);

const ex5 = 10 < 0 || 10 < 20; // true
const ex6 = 10 < 20 || abcd; // true;
console.log(ex6);

const ex7 = (10 < 20 && 10 < 15) || 10 < 0 || (true && false && true) || true; // true

const ex8 = !(10 < 20); // true > false
const ex9 = !10 < 20; // false(0) < 20 > true
console.log(ex8, ex9);