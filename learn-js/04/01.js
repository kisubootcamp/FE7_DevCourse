// 함수 선언식 (함수 선언문)
function greet() {
	console.log("greet");
}
(function greet() {
	console.log("greet");
})(); // 이렇게 해도 즉시실행이 됨
// greet();

// 함수 표현식
// named function (네이밍 함수)
const hello = function hello() {
	console.log("hello");
};
hello();

// unnamed function (익명함수)
const afternoon = function () {
	console.log("afternoon");
};
afternoon();

// 네이밍, 익명함수 둘다 상관없이 실행됨
// 원래는 디버깅때 네이밍함수가 유리했으나 요새는 성능이 많이 좋아져서 둘다 상관이 없음
// 강사님께서는 익명함수를 잘 쓴다고 함. 네이밍을 쓰고싶다면 네이밍함수에 변수명과 함수명을 일치시키는것을 추천 (일관적으로 코드 작성하기)

// ES6에서 화살표 함수가 추가됨
() => {
	console.log("arrow function");
};
// 호출하고싶어도 호출할수가없네 ?? 소괄호로 감싸고 뒤에 한번더 감쌈

// 즉시 실행 함수
(() => {
	console.log("arrow function");
})();

// 변수에다가 선언하기
const arrFunc = () => {
	console.log("arrow function");
};
arrFunc();
// 얘가 변수에 담겨졌다고 함수표현식이라고 할수는 없음

// 나의 질문 : 함수 작성할 때 사용빈도 순위
// 실무에서 고루고루 다 써서 사용빈도 순위를 매기기가 어려움
// 함수표현식에서는 익명을 잘 씀 (강사님 기준)

// 함수는 코드 담는 주머니 느낌
// 한번 정의해 놓으면 계속 호출해 쓸 수 있으니 코드의 재사용성이 좋음
