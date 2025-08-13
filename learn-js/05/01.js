// 호이스팅
// 자바스크립스 문법을 선언과 할당으로 구분을 분리해서 선언을 최상단으로 끌어올림

console.log(num);
let num = 10;

// var num;
// console.log(num);
// num = 10;
// console.log(num);

// let, const는 호이스팅 되지 않는다?
// annot access 'num' before initialization
// let, const는 var와 다르게 undefined로 초기화 되어있지 않아서 오류 발생
