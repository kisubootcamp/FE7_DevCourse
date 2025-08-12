// 1억번 실행해도 a -> b 순서는 변하지 않는다
function a() {
	console.log("a");
}

function b() {
	console.log("b");
}

a();
b();

/* 

콜스택 + 실행 컨텍스트
전역 실행 컨텍스트
실행 컨텍스트 ? 자바스크립트 코드가 실행되는 환경
Record Environment
- 생성 단계 (var num) : 모든 변수와 함수 선언 같은 것들이 기록
- 실행 단계 : 생성 단계에서 기록된 정보를 바탕으로 코드를 실행

*/
var num = 10;
console.log(num);

/* 

실행 컨텍스트 - 자바스크립트 코드가 실행되는 환경
전역 실행 컨텍스트(필수적으로 생성됨) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
함수 실행 컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경

*/
function print() {
	console.log("print");
}
// 전역 실행 컨텍스트는 1개만 생성된다
// 모든 자바스크립트는 함수 밖에서부터 진행된다
// 그러므로 전역 실행 컨텍스트부터 생성이 된다
print();

// Record Environment에 생성되는 단계를 정리해보면
// 생성 -> a = function, b = function  // 일시적 사각지대. TDZ
// 실행 -> a()
// 함수 내부를 실행하기 위한 함수 컨텍스트를 생성

function a() {
	console.log("a");
	function b() {
		console.log("b");
	}
	b();
}
a();
console.log("c");

let num = 10;
function printNum() {
	const uname = "sanga";
	console.log(num); // 10
}
printNum();
console.log(num); // 10
console.log(uname); // uname is defined

/* 

스코프와 컨텍스트의 차이가 뭔가?

스코프 : 변수에 접근할 수 있는 유효한 범위
1) 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
2) 전역 스코프 : 함수 안/밖 어디서든 변수에 접근할 수 있는 유효한 범위
스코프 체인

함수 내부에서는 외부의 변수를 참조할 수 있고
함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

실행 컨텍스트 내부가 유효한 스코프의 범위 라고 볼 수 있다.
함수 컨텍스트는 outer라는 객체의 존재에 의해서 자신의 상위 객체의 변수를 참조할 수 있다.
그런 의미에서 함수 스코프랑 함수 컨텍스트는 다른 느낌이긴 하다

*/

const exc = 10;
function printExc() {
	const exc = 20; // 변수 쉐도잉(variable shadowing) : 덮어 씌워지기
	function inner() {
		console.log(exc); // 20
	}
	inner();
}
printExc();

/* 

1. 전역 실행 컨텍스트 내부의 Record에 exc = 10, printExc = function 저장
2. printExc 함수 실행 컨텍스트 생성. exc = 20, inner = function 저장 (exc가 다시 선언되어 TEZ(temoral dead zone)가 해소됨)
3. inner 함수 실행 컨텍스트 생성. Record에 console.log(exc)가 있으나 자신의 실행 컨텍스트 내부에 exc가 없음. outer 객체를 통해 printExc에서 exc = 20 값을 사용함
4. console.log() 사용한 inner 함수 실행 컨텍스트는 큐스택에서 아웃. 가비지 컬렉션
5. inner() 까지 실행한 printExc 함수 실행 컨텍스트도 큐스택에서 아웃. 가비지 컬렉션
6. printExc() 까지 실행한 전역 실행 컨텍스트는 끗

*/

const ex2 = 10;
function a() {
	const ex2 = 20;
	b();
	console.log(`a: ${ex2}`);
}
function b() {
	console.log(`b: ${ex2}`); // 이건 왜 10이 나오는지??
}
a();

/* 

1. 전역: ex2 = 10, a = function
2. a 실행 컨텍스트 생성하자마자 b 실행 컨텍스트가 생성됨
3. b의 상위 스코프는 ex2 = 10이 속해있는 전역 스코프임. a랑은 다른 스코프임
4. 그래서 b는 ex2 = 10으로 출력되고 a는 20이 나옴

 */