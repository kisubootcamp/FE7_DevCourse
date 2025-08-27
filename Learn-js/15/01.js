// 자바스크립트는 동기(synchronous) 언어
// 다만, 자바스크립트 언어적으로 비동기를 다룰 수 있는 매커니즘 존재 => 콜백 함수, Promise 객체

// 콜백함수
// 나중에 불려질 함수, 다른 함수의 인자로 전달되어 그 함수 내부에서 호출되는 함수

function task1(callback) {
  setTimeout(() => {
    console.log("task1");
    callback();
  });
}

function task2(callback) {
  console.log("task2");
  callback();
}

function task3(callback) {
  console.log("task3");
  callback();
}

function task4(callback) {
  console.log("task4");
  callback();
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("done");
      });
    });
  });
});
