// 비동기

console.log("1");
setTimeout(() => {
  console.log("setTimeout");
  console.log("2");
}, 1000);
console.log("3");

// 자바스크립트는 기본적으로 동기(asynchronous) 방식으로 동작하는 언어이다.
// 다만, 자바스크립트는 언어적으로 비동기(asynchronous)를 다룰 수 있는 메커니즘을 제공한다.

// 콜백 함수
// 콜백: 나붕에 불려지다 + 함수: 어떤 코드의 실행 집합
// 나중에 불려질 함수, 다른 함수의 인자로 전달되어 그 함수 내에서 호출되는 함수

// 동기 콜백 함수
function print(fn) {
  fn();
}

print(() => {
  console.log("hello");
});

const processArray = (array, callback) => {
  for (const value of array) {
    callback(value);
  }
};

const logValue = (value) => {
  console.log(value);
};

const numbers = [1, 2, 3, 4, 5];
processArray(numbers, logValue);

// 비동기 콜백 함수
const print2 = (fn) => setTimeout(fn, 1000);
print2(() => {
  console.log("async callback");
});
