// &  -> 앰퍼센드
// |  -> 파이프
// 앤드 연산자 &&  , 오알 연산자 || , 부정 연산자 !
// 앤드 = 좌변과 우변 모두참 ,  오알 = 좌변과 우변 하나만 참이면 됨
// 부정 = 단일 피연산자를 반대의 논리형 데이터로 반환합니다.

const ex1 = 10 < 20 && 10 < 15;
const ex2 = 10 > 20 && 10 < 15;
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // 순서대로 1 번과 2번 하고 그 결과와 3번

// 연산자에도 우선순위가 있음 and 와 or 연산자는 동등함

const ex4 = !(10 < 20); // false
const ex5 = !10 < 20; // true
// 10은 0 false undefined null 이 아니라 true !10 은 false
// false < 20 ,  근데 false는 0으로 치횐됨
console.log(ex4, ex5);

//팁
console.log(0);
const x = 10;
console.log(!!x); // true나 false 로 치환하는 법
