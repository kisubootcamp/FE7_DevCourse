/* // WEB API -> 순수 JavaScript로 실행할 수 없음
// BOM, DOM -> 브라우저에서만 실행할 수 있음

// defer, async 속성은 외부 스크립트에서만 사용가능 */


// var, let, const
var num = 10;
// console.log(num); // 값을 출력하기 위한 방법

// var         ES5
// let, const  ES6

/* var 치명적인 단점 */
var ex2 = 10;
//  ... 몇백줄의 코드...
var ex2 = 20;
//  그냥 냅다 덮어씌워짐


let MAX_LEVEL = 99;
// let MAX_LEVEL = 20;   // 이렇게 하면 SyntaxError: Identifier 'MAX_LEVEL' has already been declared 오류가 발생함
// console.log(MAX_LEVEL); 

const MIN_LEVEL = 99;
// MIN_LEVEL = 20;     // 이렇게 하면 Assignment to constant variable. 오류가 발생함
// console.log(MIN_LEVEL);

/* 
let 변수
const 상수(변하지않는 수) -> 근데 배열에 push로 하면 바뀌긴함. 이건 잘못된 정의임

결론은????? 재할당이 가능하면 let, 재할당이 불가능하면 const
재할당이 가능한 변수, 재할당이 불가능한 변수로 말하는게 좀더 정확할듯

강사님팁 -> 무지성 const로 선언하고 바뀌어야할때만 let 쓰기. let을 사용하면 메모리 사용적인 차원에서 비효율적임 (오늘날에 있어서는 문제는 없음)

*/
const arr = [1];
arr.push(2);
// console.log(arr);

    const Word = 10 + 20;
// keyword identifier  연산자(=, +)      표현식(10+20)       10+20의 계산결과인 30은 값
// : 단어  : 식별자
//         변수명(keyword의 역할에 따라서 다른이름으로 불릴 수 있기에 변수명이라고 부를 수도 있는것임)



// 키워드: const
// 식별자: Word
// 연산자: =, +
// 피연산자: 연산의 연산대상이 되는 것 (num, 10+20)
// 표현식: 10+20
// 값: 30


// var, let 키워드만 사용가능 ex) let num2;
// const 선언과 동시에 할당이 이루어져야함 ex) const num3 = 30;
/**
 * 
 * 
 * 오...... js독? 이라는 문법이라고함
 */


// 연습문제쓰

// 두 개의 변수 `x`와 `y`를 선언하고, 각각 숫자 10과 20을 할당하세요. 그리고 두 변수를 더한 값을 새로운 변수 `sum`에 저장하고 `sum`의 값을 콘솔에 출력하세요.
const x = 10,
    y = 20,
    sum = x + y;
console.log(sum);

// 1. 변수 `name`에 "Alice"라는 값을 할당하세요.
let name = "Alice";
// 2. 이후 `name` 변수에 "Bob"이라는 값으로 재할당하세요.
name = "Bob";
// 3. `name` 변수의 최종 값을 콘솔에 출력하세요.
console.log(name); // vscode 코드가 참조하는? 어쩌구에 name이 나올거기때문에 name이라는 식별자는 쓰지말것

// 1. 상수 `PI`를 선언하고 값 3.14를 할당하세요.
const PI = 3.14;
// 2. `PI` 값을 콘솔에 출력하세요.
console.log(PI);

// 1. `a`와 `b`라는 두 변수를 선언하고 각각 숫자 5와 10을 할당하세요.
let a = 5,
    b = 10;
// 2. 변수의 값을 서로 교환하여 `a`에는 10이, `b`에는 5가 저장되도록 코드를 작성하세요.
let temp = a;
a = b;
b = temp;
console.log(a, b);
// [a, b] = [b, a]  이렇게 풀수도 있음

