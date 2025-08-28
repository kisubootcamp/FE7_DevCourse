// 자바스크립트는 동기(synchronous) 언어다.
// ㄴ 동기 :: 코드가 한 번에 한 줄씩 실행
// 다만, js 언어적으로 비동기(asynchronous)를 다룰 수 있는 메커니즘을 가지고 있을 뿐
// ㄴ 비동기 :: 코드의 실행을 기다리지 않는다 (setTimeout 등...)

// 동기
console.log("1");
console.log("2");
console.log("3");

// 비동기
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
// 어디에 잠깐 보관해둠?
console.log("3");

// 비동기 메커니즘 적용해도 순서에 보장을 유지하고 싶을 때
// ㄴ 콜벡함수 사용

// 1. 콜백함수
// ㄴ 콜백 (나중에 불려짐) + 함수 (어떤 코드의 실행 집합)
// = 나중에 불려질 함수, 다른 함수의 인자로 전달되어 그 함수 내부에서 호출되는 함수

// 1.1 동기 콜백 함수 (순차적)
function print(fn) {
  fn();
}
print(() => console.log("Hello"));

const processArray = (array, callback) => {
  for (const value of array) {
    callback(value);
  }
};
const logValue = (value) => console.log(value);
processArray([1,2,3,4],logValue);

// 1.2 비동기 콜백 함수
const print2 = (fn) => setTimeout(fn, 1000);
print2(() => console.log("async"));