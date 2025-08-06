// & 앰퍼센드
// | 하이프
// && 앤드 연산자 => 둘 다 참이면 참
// || 오알 연산자 => 둘 중 하나만 참이면 참
// ! 부정 연산자

const ex1 = 10 < 20 && 10 < 15; // true
const ex2 = 10 < 20 && 10 < 15; // false
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // false
console.log(ex3);

const ex4 = 10 < 0 || 10 < 15; // true
console.log(ex4);

const ex5 = (10 < 20 && 10 < 15) || 10 < 0; // true
console.log(ex5);

const ex6 = !(10 < 20);
const ex7 = !10 < 20;
console.log(ex6, ex7);

// !! -> 어떠한 값이라도 true or false 반환
const xx = 10;
console.log(!xx);
