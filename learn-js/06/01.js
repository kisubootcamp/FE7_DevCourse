// 함수는 일급 객체
// 일급 객체? => 객체의 한 종류
// 모든 일급 객체는 객체일 수 있지만 ? 모든 객체가 일급 객체가 될 수 있는건 아니다
// [ 객체 [ 일급 객체 ] ]

/* 일급객체?
1.변수나 데이터 구조(배열, 객체)에 담을 수 있다
2.함수의 인자로 전달할 수 있어야 한다.
3.함수의 반환 값으로 사용할 수 있어야 한다.
4.런타임에 생성할 수 있어야 한다.
5.프로퍼티를 가질 수 있어야 한다.
*/

//그렇다면 함수는 일급 객체인가? 증명
// 1. 변수나 데이터 구조에 담을 수 있다 <= 조건 충족
const sayHello2 = function sayHello() {
  console.log("hello");
};

// 2. 함수의 인자로 전달할 수 있어야 한다.
// 함수를 매개변수로 받아서 사용하는 함수 => 콜백함수
// 콜백함수는 매개변수 이름을 callback으로 정의하는 암묵적 룰
function greet(callback) {
  console.log(callback("jiho"));
}
greet((name) => `Hello, ${name}`);

// 3. 함수의 반환 값으로 사용할 수 있어야 한다.
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

// 4. 런타임에 생성할 수 있다.
// 런타임에 new Function()을 함수로 변환
const dynamicFn = new Function("a", "b", "return a + b");
console.log(dynamicFn(3, 4));

// 5. 프로퍼티를 가질 수 있어야 한다.
sayHello2.lang = "korea";
console.log(sayHello2.lang);
console.log(sayHello2);
