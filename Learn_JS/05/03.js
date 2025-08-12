// greet(); // 호이스팅 / 선언과 할당을 분리해서 선언을 최상위로 끌어올림

// // 함수 선언문 < 선언
// function greet(){
//     console.log("hello");
//}

greet(); // TypeError: greet is not a function

// great는 호이스팅 되었지만 undefined이다
var greet = function greet(){
    console.log("hello");
}

