function task1() {
  return new Promise((resolve) => {
    console.log('task1');
    resolve();
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
  console.log('task5');
}
async function runTasks() {
  await task1();
  await task2();
  await task3();
  await task4();
  await task5();
  console.log('task all finish');
}

runTasks();
