// function task1(callback) {
//   console.log("task1");
//   callback();
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("task2");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   console.log("task3");
//   callback();
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("task4");
//     callback();
//   }, 1000);
// }

// function task5(callback) {
//   console.log("task5");
//   callback();
// }

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task1");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task2");
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve) => {
    console.log("task3");
    resolve();
  });
}

function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task4");
      resolve();
    }, 1000);
  });
}

function task5() {
  return new Promise((resolve) => {
    console.log("task5");
    resolve();
  });
}

task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => task5())
  .finally(() => console.log("finish")); //맨 마지막에 실행

//콜백 지옥 패턴
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5(() => {
//           console.log("task all finish");
//         });
//       });
//     });
//   });
// });
