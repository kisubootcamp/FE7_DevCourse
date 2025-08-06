//대입 연산자
//할당 연산자, 복합 대입 연산자
//할당 연산자(=)

const num = 10;
console.log(num);

//복합 대입 연산자. 산술 연산자와 대입연산자를 한번에 사용.
//+=, -=, *= /=, %=,**=

let x = 10;

x += 10; // x = x+10
x -= 10; // x = x-10
x *= 10; // x = x*10
x /= 10; // x = x/10
x %= 10; // x = x%10
x **= 10; // x = x**10
console.log(x);

// 1. 기본 산술 연산
//     1. 두 숫자 10과 5를 변수 `a`와 `b`에 할당하세요.
//     2. 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행하고 결과를 각각의 변수에 저장하세요.
//     3. 각 연산의 결과를 콘솔에 출력하세요.

let a = 10;
let b = 5;

const plus = a + b;
const minus = a - b;
const multipl = a * b;
const division = a / b;
const remainder = a % b;
const square = a ** b;

console.log(plus);
console.log(minus);
console.log(multipl);
console.log(division);
console.log(remainder);
console.log(square);
