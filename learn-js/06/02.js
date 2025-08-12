// WEB API: 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단

/*
function makeGreeter(name) {
    return function () {
        return `안녕! ${name}`;
    };
}
*/
const makeGreeter = (name) => () => `안녕! ${name}`;
const greetJohn = makeGreeter("John");
console.log(greetJohn());
