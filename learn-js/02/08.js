// & : 엔드 기호, 엠퍼센트
// | : 짝대기, 파이프
// && : 엔드 연산자
// || : 오알 연산자
// ! : 부정 연산자

// const ex1 = 10 < 20 && 10 < 15; //true
// const ex2 = 10 > 20 && 10 < 15; //false
// const ex3 = 10 < 20 && 10 < 15 && 10 < 0; //왼쪽에서부터 오른쪽
// console.log(ex1, ex2, ex3);

// //연산 순서의 중요성. AND의 첫 항이 false면 이후 항은 검사하지 않는다.
// const ex4 = 10 > 20 && sdfsdfsdlfsfjl;
// console.log(ex4);

// const ex5 = 10 < 0 || 10 < 20; //true
// const ex6 = 10 < 20 || sdfsdfsdfksjf; //true
// console.log(ex5, ex6);

// const ex7 = (10 < 20 && 10 < 15) || 10 < 0 || (true && false && true) || true; //ture
// console.log(ex7);

const ex9 = !(10 < 20); //false
const ex10 = !10 < 20; //true

console.log(ex9, ex10);

//팁: 변수를 논리형으로 판단하도록 해야하는 경우.
const x = 10;
console.log(!!x); // true false로 택1 평가한다. 이경우 true.
