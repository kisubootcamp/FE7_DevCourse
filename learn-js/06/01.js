/* 

함수는 일급 객체다.
일급 객체란 ? 객체의 한 종류
모든 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수 있는 건 아니다

이건 일급 객체의 조건~
1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다
2. 함수의 인자로 전달할 수 있어야 함
3. 함수의 반환 값으로 사용할 수 있어야 함
4. 런타임에 생성할 수 있어야 함
5. 프로퍼티(속성)을 가질 수 있어야 함

*/

// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다
const sayHello = function sayHello(name) {
	console.log(`Hello, ${name}`);
};

// 2. 함수의 인자로 전달할 수 있어야 함
function greet(fn) {
	console.log(fn);
}
greet("Hello");
greet(23);
greet(null);
greet([10, 20]);
// 뿐만아니라 객체도 전달이 가넝한...

// 3. 함수의 반환값으로 사용할 수 있어야 함
function multiplier(factor) {
	return function (num) {
		return num * factor;
	};
}
const double = multiplier(2);
// 그럼 이거는
// const double = function (num) {
//   return num * 2;
// }
console.log(double(5));

// 4. 런(run)-타임(time)에 생성할 수 있어야 함
const dynamicFn = new Function("a", "b", "return a+b");
console.log(dynamicFn(3, 4));
// 자바스크립트 엔진이 런타임 동안에
// function dynamicFn(a, b) {
// 	return a + b;
// }
// 이렇게 생성될 수 있음.
// 그런데 실무에서 절대 사용할 일이 없으미.. 알아만 두세요

// 5. 프로퍼티(속성)을 가질 수 있어야 함
sayHello.lang = "korea";
console.log(sayHello.lang);
