// const printName;
// console.log(num);
// num = 10;
// console.log(num);

// 함수 표현식
printName = function printName() {
    console.log("greet");
}

// 함수는 일급 객체
// 일급 객체라는 것은 객체의 한 종류
// 모든 일급 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수 있는 건 아니다.
// 일급 객체가 되기 위한 조건
// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있음
// 2. 함수의 인자로 전달할 수 있어야 함
// 3. 함수의 반환 값으로 사용할 수 있어야 함
// 4. 런타임에 생성할 수 있어야 함
// 5. 프로퍼티(속성)을 가질 수 있어야 함


// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있음
const sayHello = function sayHello(name) {
    console.log(`Hello, ${name}`);
}

// 2. 함수의 인자로 전달할 수 있어야 함
function greet(fn) {
    console.log(fn("World"));
}
// greet("Hello");
// greet({ name : "sucoding"});

greet(sayHello);

// 3. 함수의 반환 값으로 사용할 수 있어야 함
function multiplier(factor) {
    return function (num) {
        return num * factor;
    }
}
const double = multiplier(2);
// double = function (num) {
//  return num * 2
// };
console.log(double(5));

// 4. 런(run)-타임(time)에 생성할 수 있어야 함
// function dynamicFn(a,b) {return a+b}
const dynamicFn = new Function("a", "b", "return a + b")
console.log(dynamicFn(3, 4));

// 5. 프로퍼티(속성)을 가질 수 있어야 함
sayHello.lang = "korea";
console.log(sayHello.lang);