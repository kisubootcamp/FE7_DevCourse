// 함수
function greet() {
  console.log("greet");
}

greet();

// 함수 표현식 (네이밍함수)
const hello2 = function hello() {
  console.log("hello");
};

hello2();

// 함수 표현식 (언네임드 함수)
const hello3 = function () {
  console.log("hello?");
};

hello3();

// 콜백함수로 쓸 수 있을듯? c++의 람다함수
//EventListener("test", function() {~~});

//화살표 함수, 즉시 실행 함수
const arrFunc = () => {
  console.log("즉시실행");
};
arrFunc();

const arrFunc2 = () => console.log("즉시실행2");

arrFunc2();

// 코드의 재사용성을 위해
