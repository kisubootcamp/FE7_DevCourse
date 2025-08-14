// 함수는 일급 객체
// 일급 객체라는 것은 객체의 한 종류
// 모든 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수 있는 건 아니다.

// 일급 객체?
// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다
// 2. 함수의 인자로 전달할 수 있어야 한다
// 3. 함수의 반환 값으로 사용할 수 있어야 한다
// 4. 런타임에 생성할 수 있어야 한다
// 5. 프로퍼티(속성)을 가질 수 있어야 한다.

// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다
const sayHello = function sayHello(name) {
  console.log(`hello, ${name}`);
};

// 2. 함수의 인자로 전달할 수 있어야 한다
function greet(fn) {
  console.log(fn("world"));
}
greet(sayHello);

// 3. 함수의 반환 값으로 사용할 수 있어야 한다
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

// 4. 런(run)-타임(time)에 생성할 수 있어야 한다
// 생성자 함수
const dynamicFn = new Function("a", "b", "return a+b");
// 실행하고 있는 시간인 런타임에 위 코드를 함수처럼 만들어서 출력하는 것
console.log(dynamicFn(3, 4));

// 5. 프로퍼티(속성)을 가질 수 있어야 한다.
sayHello.lang = "korea";
console.log(sayHello.lang);
