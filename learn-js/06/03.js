function greet(fn) {
  console.log(fn("world"));
}

greet(function (name) {
  return `Hello, ${name}`;
});

//3
// WEB API, 웹 브라우젖 기반 프로그래밍 할 때 사용할 숭 ㅣㅅ는 수단
// DOM document.querySelector()
setTimeout(() => {
  console.log("5초 뒤에 실행됨");
}, 5000);

//4
function makeGreeter(name) {
  return function () {
    return `안녕! ${name}`;
  };
}

const makeGreeter = (name) => () => `안녕! ${name}`;
