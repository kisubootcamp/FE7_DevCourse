// 콜스택 + 실행 컨텍스트
// 실행 컨텍스트 - 자바스크립트 코드가 실행되는 환경
// 전역 실행 컨텍스트 - 자바스크립트 코드가 함수 외부에서 실행되는 환경. 필수 생성됨.
// 함수 실행 컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경
// Record Environment
// - 생성 단계 (var num), 모든 변수와 함수 선언 같은 것들이 기록됨
// - 실행 단계, 생성 단계에서 기록된 정보를 바탕으로 코드를 실행

// Record Environment
// 생성 -> a = function, b = function // TDZ, 일시적 사각 지대
// 실행 -> a();

console.log(num);
let num = 10;

function a() {
    console.log("a");
    b();
}
function b() {
    console.log("b");
}
a();
console.log("c");


const a = function a() {
    console.log("a");
    function b() {
        console.log("b");
    }
    b();
}

a();
var a = function() {
};
console.log("c");


// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프: 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// 전역 스코프: 어디서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
// 스코프 체인

// TDZ(Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉(variable Shadowing)
// 식별자 결정

const num = 10;
function printNum() {
    const uname = "suyeon";
    const num = 20;
    console.log(num);
}
printNum();
console.log(num);
console.log(uname); // 이미 gabage collection이 수행돼서 접근 못함

function outer(x) {
    function inner(x) {
        console.log(x + 10);
    }
    inner(x);
}
outer(10);