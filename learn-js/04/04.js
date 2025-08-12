function guguadan3() {
    for (let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}

guguadan3();

function gugudan4() {
    for (let i = 1; i <= 9; i++) {
        console.log(`4 * ${i} = ${4 * i}`)
    }
}
gugudan4();

function gugudan(dan) {
    // 매개변수 (parameter)
    for (let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}

gugudan(9); // 3, 인자 또는 인수(argument)

// 덧셈을 하는 함수
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(10, 20); // 10 + 20 + undefined
sum(10, 200);
sum(10, 200, 30);

// 함수의 매개 변수
// 매개 변수는 정의에 대한 의무가 없다.
// 가변 인자 함수
function sum() {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

sum(10, 20, 30, 40);

// 유사 배열 객체: 객체처럼 생겼지만 배열로 사용 가능

// 함수 (function) / 메서드(method)
const obj = {
    name: "sucoding",
    greet: function () {
        console.log("greet");
    },
}

obj.greet();