function task1(callback) {
  console.log("task 1");
  callback();
}

function task2(callback) {
  setTimeout(() => {
    console.log("task 2");
    callback();
  }, 1000);
}

function task3(callback) {
  console.log("task 3");
  callback();
}

function task4(callback) {
  setTimeout(() => {
    console.log("task 4");
    callback();
  }, 1000);
}

function task5(callback) {
  console.log("task 5");
  callback();
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log("all tasks done");
        });
      });
    });
  });
});

// 콜백 지옥(callback hell) 또는 피라미드 현상(pyramid of doom)
// 콜백 함수가 중첩되어 코드의 들여쓰기(depth)가 깊어지는 현상
// 가독성이 떨어지고 유지보수가 어려워짐

// 이를 해결하기 위해 자바스크립트는 프로미스(Promise)라는 비동기 처리 메커니즘을 제공
