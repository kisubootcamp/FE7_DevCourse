// 호이스팅
// 자바스크립 문법을 선언과 할당으로 구문을 분리해서, 선언 부분을 최상위로 끌어올리는 현상

// console.log(num);
// let num = 10; // 호이스팅은 되지만 초기화가 늦게 된다.

// let, const 키워드부터 변수 사용 실수를 초기 단계에서 부터 잡아준다.

// greet();

// 함수 선언문(선언)
// function greet() {
//   console.log('hello');
// }

// 함수 표현식
// const greet = function greet() {
//   console.log('hello');
// };

var num;
function num() {
  return 10;
}

console.log(num);
num = 5;

console.log(num);
console.log(num());

// num 변수 선언, num 함수 선언 올라감
// 그 뒤에 num 변수에 5 라는 값이 할당됨
// console.log로 5가 두 번 찍힘
// 그 뒤 num 함수를 호출하려 해도 이미 5를 담은 변수이기때문에 함수가 아님
