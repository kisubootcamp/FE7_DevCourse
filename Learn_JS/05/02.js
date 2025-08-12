// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올림
console.log(num); 
var num = 10;

var num2;
console.log(num2);
num2 = 10;
console.log(num2);

// let const는 호이스팅 되지만 var와 달리 undefined로 초기화 되지 않아 초기화가 지연되어서 
// TDZ(변수가 스코프에 존재하지만 초기화 되기 전까지 접근할 수 없음) 발생