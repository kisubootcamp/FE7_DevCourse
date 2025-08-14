// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끝어올리는 현상

// var num = 10 + 20; // 초기화 (선언 + 할당)
// var num; // 선언
// num = 10; // 할당
// let num = 10;
// let, const는 호이스팅은 되지만 초기화가 지연된다.

var num = 5;
console.log(num);
function num() {
    return 18;
}
console.log (num);
console.log(num());

function greet() {
    console.log("Hello");
}

greet();