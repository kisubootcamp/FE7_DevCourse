// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올리는 현상
// 자바스크립트(인터프리티 언어) - 한 줄 한 줄 읽는 것, C, C++(컴파일 언어) - 한 번에 읽는 것
console.log(num);
var num = 10;

// 위 코드는 아래 코드와 같음
var num; //선언이 분리돼서 최상단으로 올라갔으니까
console.log(num);
num = 10;

// var가 아니라 let이나 const였으면?
// undefined가 나오는 게 아니라 아예 error가 나옴
// 호이스팅은 되지만 초기화가 안 되는 것
console.log(num1);
console.log(num2);
let num1 = 10;
const num2 = 20;
