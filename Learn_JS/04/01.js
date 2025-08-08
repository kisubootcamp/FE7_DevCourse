function greet() {
    // 1
    // 2
    // 3
    console.log("greet");
}

greet();

// 함수 표현식
// named function (네이밍 함수)
const Hello = function afternoon(){
    console.log("hello");
};

Hello();

// unname function (익명 함수)
const afternoon = function(){
    console.log("afternoon");
};

afternoon();

// 화살표 함수
// 즉시 실행 함수
const arrFunc = () => {
    console.log("arrow function");
};
arrFunc();

