const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task1");
    // reject(new Error("실패함"));
  }, 1000);
});

/* promise.then(
  (value) => {
    console.log(value);
  }, // resolve 성공
  (reason) => {
    console.log(reason);
  } //reject 실패
);
 */

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
      }, 2000);
    });
  })
  .then((value) => {
    console.log(value);
    return "task all finish";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  });
