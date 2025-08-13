function a(){
    console.log("a");
}

function b(){
    console.log("b");
}

a();
b();
console.log("c");

// 콜스택 + 실행컨텍스트
// 전역 실행컨텍스트
// 실행컨텍스트 - 자바스크립트 코드가 실행되는 환경
// Record Environment
// - 생성 단계(var num)
// - 실행 단계 

// Outer Environment
// Lexical Environment

// 스코프 : 변수에 접근할 수 있는 유효한 범위
// 함수 스코프 : 함수 안에서만 접근할 수 있는 유효한 범위 
// 전역 스코프 : 어디서든 변수에 접근할 수 있는 유효한 범위
// 스코프 체인

// 함수 내부에서 외부 변수 참조 가능
// 함수 외부에서 함수 내부 변수 참조 불가능

// TDZ(Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉
// 식별자 결정

// var num;
// console.log(num);
// num = 10;

const num = 10;
function printNum(){
    const uName = "Kisu";
    console.log(num);
}
printNum();
console.log(num);
console.log(uName);

