// 함수
// 함수를 정의한다
// 함수를 실행(호출)한다
function greet() {
    // 1
    // 2
    // 3
    // 4
    // 5
}

// 함수 선언식(함수 선언문)
function greet() {
    console.log("greet");
}

greet();

// 함수 표현식
// named function (네이밍 함수)
const hello = function afternoon() {
    console.log("greet");
};

hello();

// unname function (익명 함수)
const afternoon = function () {
    console.log("afternoon");
};
afternoon();

// 화살표 함수
// 함수를 더 간편하게 전달하게 하기 위해 화살표 함수 만듦

// 즉시 실행 함수
(() => {
    console.log("arrow function");
})();

const arrFunc = () => {
    console.log("arrow function");
}
arrFunc();