function task1(callback) {
  console.log("task1");
  callback(); // 매개변수 없어서 () 공란
}
function task2() {
  setTimeout(() => {console.log("task2"); callback();}, 1000);
}
function task3() {
  console.log("task3");
}
function task4() {
  setTimeout(() => console.log("task4"), 1000);
}
function task5() {
  console.log("task5");
}

// task1 :: 매개변수가 없는 함수가 callback으로 넘어감
// callback 함수 하나를 매개변수로 하여 task2 함수를 호출 (task2의 매개변수가 함수)

// 콜백 지옥 패턴 (callback Hell pattern)
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log("task all finish");
        });
      });
    });
  });
});
// 이렇게 많이 쓸거 아니면 유용한 방법