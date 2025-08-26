function task1() {
  console.log("task1");
  return Promise.resolve();
}
function task2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task2");
      resolve();
    }, 1000)
  );
}
function task3() {
  console.log("task3");
  return Promise.resolve();
}
function task4() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task4");
      resolve();
    }, 1000)
  );
}
function task5() {
  console.log("task5");
  return Promise.resolve();
}

// Promise, catch()
// Async-await, try-catch

async function runTasks() {
  await task1();
  await task2();
  await task3();
  await task4();
  await task5();
  console.log("task all finish");
}
runTasks();
