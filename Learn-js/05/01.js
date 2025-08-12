// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올리는 현상
console.log(num1);
var num1 = 10;
console.log(num1);

// 위 코드는 아래와 같음
var num2;
console.log(num2);
num2 = 10;
console.log(num2);

// let const => 호이스팅은 되지만, 초기화가 늦게 되는 것 (호이스팅이 되지 않는다 X)
// error msg를 근거로!
