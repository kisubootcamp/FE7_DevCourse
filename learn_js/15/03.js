function task1(cb) {
  console.log('task1');
  cb();
}
function task2(cb) {
  setTimeout(() => {
    console.log('task2');
    cb();
  }, 1000);
}
function task3(cb) {
  console.log('task3');
  cb();
}
function task4(cb) {
  setTimeout(() => {
    console.log('task4');
    cb();
  }, 1000);
}
function task5(cb) {
  console.log('task5');
  cb();
}

// 콜백함수, 콜백 지옥 패턴
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log('task all finish');
        });
      });
    });
  });
});
task2();
task3();
task4();
task5();
