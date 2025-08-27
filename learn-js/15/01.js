//자바스크립트는 동기(synchronous) 언어.
//다만, 자바스크립트 언어적으로 비동기(asynchronous)를 다룰 수 있는 매커니즘을 가지고 있을 뿐

const { useCallback } = require("react");

console.log("1");
//1초 뒤에 실행
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

//비동기를 사용하면서도, 순서를 지키고 싶으면?
//콜백 함수 (나중에 불러지다 + 함수)
//나중에 불러질 함수, 다른 함수에 인자로 전달되며 그 함수 내부에서 호출되는 함수

function print(fn) {
  fn();
}
print(() => console.log("Hello")); //함수가 인자로 전달

//비동기 함수가 있더라도 일정한 순서 보장

//동기 콜백 함수
const print = (fn) => fn();
print(() => console.log("Hello"));

const processArray = (array, callback) => {
  for (const value of array) {
    callback(value);
  }
};
const logValue = (value) => console.log(value);
processArray([1, 2, 3, 4], logValue);

//비동기 콜백 함수
const print2 = (fn) => setTimeout(fn, 1000);
print2(() => console.log("async"));

function printOne(callback) {
  console.log("1");
  callback();
}

function printTwo(callback) {
  setTimeout(() => {
    console.log("2");
    callback();
  }, 1000);
}

function printThree() {
  console.log("3");
}

printOne(()=>{
  printTwo(()=> {
    printThree();
  });
});

