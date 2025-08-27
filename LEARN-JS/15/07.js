const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('task1');
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
    return 'task2';
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('task3');
      }, 1000);
    });
  })
  .then((value) => {
    console.log(value);
    return 'task4';
  })
  .then((value) => {
    console.log(value);
    return 'finish';
  })
  .then((value) => {
    console.log(value);
  });
