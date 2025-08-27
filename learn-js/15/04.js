const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task1");
  }, 1000);
});

// promise.then(
//   (value) => {
//     // resolve 실행되었을 때
//     console.log(value);
//   },
//   (reason) => {
//     // reject 실행되었을 때
//     console.error(reason);
//   }
// );

promise
  .then((value) => {
    console.log(value);
    return "task2";
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("task3");
      }, 200);
    });
  })
  .then((value) => {
    console.log(value);
    return "task4";
  })
  .then((value) => {
    console.log(value);
    return "task all finish";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason);
  });
