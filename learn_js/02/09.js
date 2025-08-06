// & -> 앰퍼센트 (앤드기호)
// | -> 파이프
// && -> and연산자
// || -> or연산자
// ! -> not연산자

const ex1 = 10 < 20 && 10 < 15; // true
const ex2 = 10 > 20 && 10 < 15; // false
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // false
const ex4 = 10 > 20 && dkkkkkkksfjksdjflsdf; //false
console.log(ex4);

const ex5 = 10 < 0 || 10 < 20; // true
const ex6 = 10 < 20 || sdlkjaflkfklafklajflkaflkjdal; //true
console.log(ex6);

// 코드의 가독성을 높이는 노력을 해야 함. -> 개발자의 역량이 이걸로 갈림.
const ex7 = (10 < 20 && 10 < 15) || 10 < 0;
console.log(ex7);

const ex9 = !(10 < 20); // false
const ex10 = !10 < 20; // true

// false -> 0 -> 20
console.log(ex9, ex10);

// 팁
const x = 10; // true
console.log(!!x);
