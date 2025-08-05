//var: 중복 변수명 선언이 가능.
// let: 중복 변수명 선언 X, 재할당 가능한 변수
//const 상수(근데 값이 변함) 그래서 상수가 아님. 선언과 할당이 동시에 이루어져야하며, 중복 변수명 선언 X 재할당이 안됨.
//let과 const의 사용이 능숙하지 않으면 그냥 무지성 const해라.

//var, let, const의 명칭은 키워드, num은 식별자(변수명)이라고 한다.
//'='는 연산자,
//num, 10은 피연산자(연산자에 의해서 영향을 받는 데이터).
//10+20: 표현식. 값으로 도출될 수 있는 식. 값은 30.
var num = 10;
var num = 10 + 20;

//선언
let num2;

//할당 let만 가능
num2 = 10;

const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);

let name = "Alice";
name = "Bob";
console.log(name);

const PI = 3.14;
console.log(PI);

let a = 5;
let b = 10;
let st = 0;
console.log(a, b);

st = a;
a = b;
b = st;
console.log(a, b);
