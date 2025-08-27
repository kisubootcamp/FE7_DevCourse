function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('task1');
      resolve();
    }, 1000);
  });
}
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('task2');
      resolve();
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve) => {
    console.log('task3');
    resolve();
  });
}
function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('task4');
      resolve();
    }, 1000);
  });
}
function task5() {
  return new Promise((resolve) => {
    resolve();
  });
}
// 콜백함수, 콜백 지옥 패턴
task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => task5())
  .finally(() => console.log('task all finish'));
