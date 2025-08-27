const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task1");
  }, 1000);
});

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
