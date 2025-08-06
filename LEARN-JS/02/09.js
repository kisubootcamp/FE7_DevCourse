// 논리 연산자
// !, ||, &&

const ex1 = 10 < 20 && 10 < 15; //true
const ex2 = 10 > 20 && 10 < 15; //false
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; //false
// 왼쪽부터 -> 연산하기때문에 처음부터 거짓이면 false하고 연산 끝
const ex4 = 10 > 20 && asvasvkjaslkvjaslkjv;

const ex5 = 10 < 0 || 10 < 20; // true
const ex6 = 10 < 20 || asvasvasvasvakjshvkjashv; //true

// and, or 우선순위 동등
const ex7 = (10 < 20 && 10 < 15) || 10 < 0;

// 코드의 가독성을 높이는 노력을 해야 함
// ai에게 답을 알려달라하지말고 힌트만 조금 씩

// ! <- 정수에다 쓸 경우 암묵적으로 0으로 만듬
const ex10 = !30 < 20; //true
console.log(ex10);

// 팁 ( 부정 연산자를 두 번 붙혀 논리 값으로 바꿈 )
const x = 10;
console.log(!!x);